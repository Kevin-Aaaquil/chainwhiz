import { Router, Request, Response, NextFunction } from "express";
import { getAllData } from "./info-services";

const handleGetInformation = async (req:Request, res:Response, next:NextFunction) => {
    const data = await getAllData();
    res.send({status:"OK",data})
};

export const infoControllers = (): Router => {
  const router = Router();

  router.get("/", (req, res) => {
    res.send("This is the STARS WARS section");
  });

  router.get("/information", handleGetInformation);

  return router;
};
