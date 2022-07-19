import { Request, Response } from 'express';
import updateInstructor from '../queries/updateInstructor';
import { errors } from '../constants/errors';
import connection from '../data/connection';

export default async function changeInstructor(
    req: Request,
    res: Response
) {
    try {
        const class_id = req.body.class_id;
        const id = req.params.id;

        if (typeof class_id !== "string" || typeof id !== "string") {
            throw new Error(errors.INVALID_TYPE_MODULE.message);
        };

        const existsId = await connection('instructor').select('id').where('id', id);
        if (existsId.length === 0) {
            throw new Error(errors.INSTRUCTOR_NOT_FOUND.message);
        };

        const existsClassId = await connection('class').select('id').where('id', class_id);
        if (existsClassId.length === 0) {
            throw new Error(errors.CLASS_NOT_FOUND.message);
        };

        const currentClass = await connection('instructor').select('class_id').where('id', id);
        if (class_id === currentClass[0].class_id) {
            throw new Error(errors.SAME_CLASS.message);
        };

        await updateInstructor(
            id,
            class_id
        );
        res
            .status(200)
            .send({
                message: "Campo alterado com sucesso!"
            });

    } catch (error: any) {
        switch (error.message) {
            case errors.UNPROCESSABLE_ENTITY.message:
                res.status(errors.UNPROCESSABLE_ENTITY.errorCode).send(errors.UNPROCESSABLE_ENTITY.message);
                break;
            case errors.INSTRUCTOR_NOT_FOUND.message:
                res.status(errors.INSTRUCTOR_NOT_FOUND.errorCode).send(errors.INSTRUCTOR_NOT_FOUND.message);
                break;
            case errors.CLASS_NOT_FOUND.message:
                res.status(errors.CLASS_NOT_FOUND.errorCode).send(errors.CLASS_NOT_FOUND.message);
                break;
            case errors.SAME_CLASS.message:
                res.status(errors.SAME_CLASS.errorCode).send(errors.SAME_CLASS.message);
                break;
            case errors.INVALID_TYPE_MODULE.message:
                res.status(errors.INVALID_TYPE_MODULE.errorCode).send(errors.INVALID_TYPE_MODULE.message);
                break;
        };
    };
};


