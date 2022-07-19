export const errors: {[key: string]: {errorCode: number, message: string}} = {
    UNPROCESSABLE_ENTITY: {errorCode: 422, message: "Um ou mais parâmentros ausentes!"},
    CLASS_NOT_FOUND:{errorCode: 422, message: "Turma não encontrada!"},
    SAME_CLASS:{errorCode: 404, message: "A turma informada é a mesma que a turma atual!"},
    INSTRUCTOR_NOT_FOUND:{errorCode: 404, message: "Instrutor não encontrado!"},
    STUDENT_NOT_FOUND:{errorCode: 404, message: "Estudante não encontrado!"},
    INVALID_TYPE_MODULE: {errorCode: 400, message: "Tipo inválido informado, verifique a documentação!"},
    INVALID_MODULE: {errorCode: 400, message: "O módulo deve ser menor ou igual a 6!"},
    OUTDATED_MODULE: {errorCode: 400, message: "O módulo precisa ser maior que módulo atual!"},
    UNAUTHORIZED_MODULE_UPDATE: {errorCode: 400, message: "Não é possível avançar mais de um módulo de uma vez!"}
};