import type { NextApiRequest, NextApiResponse } from "next";
import { PortfolioType } from "@/utils/types";
import { items } from "@/data/data";

type Data = {
    item?: PortfolioType;
};

type Error = string;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>
) {
    const { name } = req.query;

    if (!name || typeof name !== 'string') {
        return res.status(400).send('Missing or invalid project name.');
    }

    const item = items.find((item) => item.name === name);

    if (item) {
        res.status(200).json({ item });
    } else {
        res.status(404).send('There is no such project');
    }
}