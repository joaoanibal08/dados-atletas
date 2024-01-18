class Atleta {

    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria(){

        if (this.idade <= 11){
            return "Infantil";
        } else if (this.idade <= 13){
            return "Juvenil";
        } else if (this.idade <= 15){
            return "Intermediário";
        } else if (this.idade <= 30){
            return "Adulto";
        } else {
            return "Sem categoria";
        }

    }

    calculaIMC(){
        return this.peso / (this.altura ** 2);
    }

    calculaMediaValida(){
        let notasOrganizadas = this.notas.sort(function(a, b){
            return a - b
        }); // Coloca os números da string em ordem crescente
        let notasFiltradas = notasOrganizadas.slice(1, -1); // Cria uma cópia da array e remove e primeiro e último elemento
        let soma = 0;
        
        for (let i = 0; i < notasFiltradas.length; i++){
            soma += notasFiltradas[i];
        }
        let media = soma / notasFiltradas.length;
        return media;
    } 
 
    obtemNomeAtleta(){
        return this.nome;
    }
    
    obtemIdadeAtleta(){
        return this.idade; 
    }

    obtemPesoAtleta(){
        return this.peso;
    }
    obtemNotasAtleta(){
        return this.notas;
    }
    obtemCategoria(){
        return this.calculaCategoria(); 
    }
    obtemIMC(){
        return this.calculaIMC();
    }
    obtemMediaValida(){
        return this.calculaMediaValida();
    }
}; 

const atleta = new Atleta("Cesar Abascal", 
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome: ${atleta.nome}`);
console.log(`Idade: ${atleta.idade}`); 
console.log(`Peso: ${atleta.peso}`); 
console.log(`Altura: ${atleta.altura}`); 
console.log(`Notas: ${atleta.notas}`); 
console.log(`Categoria: ${atleta.obtemCategoria()}`); 
console.log(`IMC: ${atleta.obtemIMC()}`); 
console.log(`Média válida: ${atleta.obtemMediaValida()}`); 