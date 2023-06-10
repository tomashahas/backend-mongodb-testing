import CreateText from "../models/createText.js";

export const getAllText = async (req, res) => {
    try{
        const allTexts = await CreateText.find().select({ body: 1, _id: 0 });

        console.log(allTexts);

        res.status(200).send(allTexts);
    }
    catch(err){
        res.status(500).send(err);
    }
}

export const createText = async (req, res) => {
    const textBody = req.body.inputText;

    console.log(textBody);

    const newText = new CreateText({body: textBody});

    try{
        await newText.save();

        res.status(201).json(newText);
    }
    catch(err){
        res.status(500).send(err);
    }
}