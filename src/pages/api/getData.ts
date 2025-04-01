import type { NextApiRequest, NextApiResponse } from "next";
import {PortfolioType} from "@/utils/types";
import {items} from "@/data/data";

type Data = {
    items: PortfolioType[];
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    res.status(200).json({ items: items });
}
