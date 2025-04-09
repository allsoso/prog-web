import {getCursos, setCurso} from "../db.js";

export const create = (curso) => setCurso(curso);

export const findAll = () => getCursos();

export const findOne = (id) => getCursos()[id];

export function update(id, cursoNovo){
    let curso = getCursos();
    curso[id] = cursoNovo;
} 

export function destroy(id){
    let cursos = getCursos();
    cursos.splice(id,1);
}
