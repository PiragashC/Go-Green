const { generateToken, decodeToken } = require("../common/jwt");
const { register, login } = require("./authController");
const dotenv = require('dotenv');
const handleUpload = require("../utils/cloudinaryUtils");
const PlantProgressForm = require("../models/plantProgressForm");

// // Load environment variables from .env file
dotenv.config();

/* create a document for an order */
const uploadPlantProgressForm = async (req, res) => {
    try {
        const { email, name, password, school, grade, accessToken, registeredStatus, role, plantName, issueDate, year, progressAndMaintenance } = req.body;
        let user;
        let token;

        const handleAuthorization = async () => {
            if (accessToken) {
                try {
                    user = await decodeToken(accessToken, process.env.JWT_SECRET);
                    if (!user) return { status: 404, error: "User not found" };
                    if (user.role !== "User") return { status: 403, error: "User is not authorized to upload Plant Progress & Maintenance Form" };
                    token = accessToken;
                } catch (error) {
                    return { status: 401, error: "Invalid token" };
                }
            } else if (registeredStatus) {
                const result = await login(email, password);
                if (result.status !== 200) return { status: result.status, error: result.error };
                user = result.user;
                if (user.role !== "User") return { status: 403, error: "User is not authorized to upload Plant Progress & Maintenance Form" };
                token = result.token;
            } else {
                if (role !== "User") return { status: 403, error: "User is not authorized to upload Plant Progress & Maintenance Form" };
                const result = await register(email, name, password, role, school, grade);
                if (result.status !== 201) return { status: result.status, error: result.error };
                user = result.user;
                token = generateToken(user, process.env.JWT_SECRET);
            }
            return { status: 200 };
        };

        const authResult = await handleAuthorization();
        if (authResult.status !== 200) {
            return res.status(authResult.status).json({ error: authResult.error });
        }

        if (!req.file) {
            return res.status(400).json({ error: "No Photo provided" });
        }

        const b64 = Buffer.from(req.file.buffer).toString("base64");
        const dataURI = `data:${req.file.mimetype};base64,${b64}`;
        const cldRes = await handleUpload(dataURI);

        const newPlantProgressAndMaintenanceForm = new PlantProgressForm({
            userId: user.id || user._id,
            plantDetail: {
                plantName,
                issueDate
            },
            progressAndMaintenance: {
                year,
                progressAndMaintenance,
                photoUrl: cldRes.secure_url
            }
        });

        await newPlantProgressAndMaintenanceForm.save();

        return res.status(201).json({
            message: 'Plant Progress & Maintenance Form uploaded successfully!',
            form: newPlantProgressAndMaintenanceForm.toObject(),
            user,
            token
        });

    } catch (error) {
        console.error(error); // Log the error to console for debugging
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    uploadPlantProgressForm
};


