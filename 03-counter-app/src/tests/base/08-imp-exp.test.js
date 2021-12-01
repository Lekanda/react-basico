import React from 'react';
import '@testing-library/jest-dom';
import { getHeroeById,getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas en 08-imp-exp.js', ()=> {
    
    test('getHeroeById manda id devuelve un obj', () => {
        const id =1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( (heroe) => heroe.id === id );

        expect(heroe).toEqual(heroeData);
    })
    test('getHeroeById manda id devuelve un undeffine si no existe heroe', () => {
        const id =10;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( (heroe) => heroe.id === id );

        expect(heroe).toBe(undefined);
    })



    test('getHeroesByOwner manda owner DC y devuelve un o varios objetos en un arreglo', () => {
        const owner ='DC';
        const heroes = getHeroesByOwner(owner);
        
        const heroesData =heroes.filter( (heroe) => heroe.owner === owner );

        expect(heroes).toEqual(heroesData);
    })
    test('getHeroesByOwner manda owner Marvel y devuelve un o objetos con 2 resultados', () => {
        const owner ='Marvel';
        const heroes = getHeroesByOwner(owner);
        

        expect(heroes.length).toBe(2);
    })
});