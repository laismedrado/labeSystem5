import { Request, Response } from 'express';
import updateClass from '../queries/updateClass';
import connection from '../data/connection';
import { errors } from '../constants/errors';

export default async function changeClass(
    req: Request,
    res: Response
) {
    try {
        let module: number = req.body.module;
        const id: string = req.params.id;

        if (!module || !id) {
            throw new Error(errors.UNPROCESSABLE_ENTITY.message);
        };

        const existsId = await connection('class').where('id', id);
        if (existsId.length === 0) {
            throw new Error(errors.CLASS_NOT_FOUND.message);
        };


        if (typeof module !== "number") {
            throw new Error(errors.INVALID_TYPE_MODULE.message);
        };

        if (module > 6) {
            throw new Error(errors.INVALID_MODULE.message);
        };

        const existsModule = await connection('class')
            .select('module')
            .where('id', id);

        if (module <= existsModule[0].module) {
            throw new Error(errors.OUTDATED_MODULE.message);
        };

        if (module > (existsModule[0].module + 1)) {
            throw new Error(errors.UNAUTHORIZED_MODULE_UPDATE.message);
        };

        await updateClass(
            id,
            module
        );

        res
            .status(200)
            .send({
                message: "Campo alterado com sucesso!"
            });

    } catch (error: any) {
        switch(error.message){
            case errors.UNPROCESSABLE_ENTITY.message:
                res.status(errors.UNPROCESSABLE_ENTITY.errorCode).send(errors.UNPROCESSABLE_ENTITY.message);
            break;
            case errors.CLASS_NOT_FOUND.message:
                res.status(errors.CLASS_NOT_FOUND.errorCode).send(errors.CLASS_NOT_FOUND.message);
            break;
            case errors.INVALID_TYPE_MODULE.message:
                res.status(errors.INVALID_TYPE_MODULE.errorCode).send(errors.INVALID_TYPE_MODULE.message);
            break;
            case errors.INVALID_MODULE.message:
                res.status(errors.INVALID_MODULE.errorCode).send(errors.INVALID_MODULE.message);
            break;
            case errors.OUTDATED_MODULE.message:
                res.status(errors.OUTDATED_MODULE.errorCode).send(errors.OUTDATED_MODULE.message);
            break;
            case errors.UNAUTHORIZED_MODULE_UPDATE.message:
                res.status(errors.UNAUTHORIZED_MODULE_UPDATE.errorCode).send(errors.UNAUTHORIZED_MODULE_UPDATE.message);
            break;         
        };
    };
};


