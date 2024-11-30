const express = require("express");
const axios = require("axios");
const { XMLParser } = require("fast-xml-parser");

const app = express();
const parser = new XMLParser();

app.get("/convert/:assetId", async (req, res) => {
    const { assetId } = req.params;
    try {
        const AssetLocation = await axios.get(`https://assetdelivery.roblox.com/v2/asset/?id=${assetId}`);
        
        if (AssetLocation == null) {
            return res.status(500).json({
                error: "Asset not found",
            });
        }

        AssetUrl = AssetLocation.data.locations[0].location;
        Asset = await axios.get(AssetUrl);
        
        const result = parser.parse(Asset.data, true);
        return res.status(200).json({
            template: result.roblox.Item.Properties.Content.url
        });

        
    } catch (error) {
        console.warn(error)
        res.status(500).json({
            error: "Conversion failed",
            message: error.message,
        });
    }
});

app.listen(80, () => {
    console.log("Converter service running");
});
