import connection from "./connection";

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

    CREATE TABLE IF NOT EXISTS class(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        module INT DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS student(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        birth_date DATE NOT NULL,
        class_id VARCHAR(255) NULL,
        FOREIGN KEY(class_id) REFERENCES class(id)
    );
    
    CREATE TABLE IF NOT EXISTS hobby(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS student_hobby(
        id VARCHAR(255) PRIMARY KEY,
        student_id VARCHAR(255),
        hobby_id VARCHAR(255),
        FOREIGN KEY(student_id) REFERENCES student(id),
        FOREIGN KEY(hobby_id) REFERENCES hobby(id)
    );
    CREATE TABLE IF NOT EXISTS instructor(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        birth_date DATE NOT NULL,
        class_id VARCHAR(255),
        FOREIGN KEY(class_id) REFERENCES class(id)
    );
    CREATE TABLE IF NOT EXISTS specialty(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS instructor_specialty(
        id VARCHAR(255) PRIMARY KEY,
        instructor_id VARCHAR(255),
        specialty_id VARCHAR(255),
        FOREIGN KEY(instructor_id) REFERENCES instructor(id),
        FOREIGN KEY(specialty_id) REFERENCES specialty(id)
    );
            
      `
   )
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError);

   const closeConnection = () => { connection.destroy() };

   createTables()
    .finally(closeConnection)