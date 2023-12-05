import {Request , Response } from 'express'
import Producto from '../models/producto'

export const getProducts = async (req: Request ,res :Response ) => {
     const listProducts  = await   Producto.findAll() 

   res.json(listProducts)

}

export const getProduct   = (req: Request ,res :Response ) => {


    res.json({
       msg:'get products',
       id:req.params.id
    })
 
 }
 


 
export const deleteProduct   = (req: Request ,res :Response ) => {


    res.json({
       msg:'delete',
       id:req.params.id
    })
 
 }




 

export const postProduct   = (req: Request ,res :Response ) => {
  const { body } = req;

    res.json({
       msg:'post product',
       body
    })
 
 }



 export const updateProductd = (req: Request , res : Response) => {
    const {body} = req;
    const {id} = req.params;
    res.json({
        msg: 'update product',
        id,
        body
    })
 }