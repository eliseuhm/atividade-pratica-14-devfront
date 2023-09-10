class Funcionario {
    constructor(name, age, office) {
        this.name = name;
        this.age = age;
        this.office = office;
    }
    seApresentar() {
        return `Sou ${this.name}, idade: ${this.age}, cargo: ${this.office}.`;
    }
    trabalhar() {
        return `${this.name}, trabalhando.`;
    }
}
class Gerente extends Funcionario {
    constructor(name, age, department) {
        super(name, age, "Gerente");
        this.department = department;
    }
    gerenciar() {
        return `${this.name}, gerindo o departamento de ${this.department}.`;
    }
}
class Desenvolvedor extends Funcionario {
    constructor(name, age, language) {
        super(name, age, "Desenvolvedor");
        this.language = language;
    }
    programar() {
        return `${this.name}, desenvolvendo em ${this.language}.`;
    }
}

function exibirErro(mensagem) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p style="color: red;">Erro: ${mensagem}</p>`;
}

document.getElementById('funcionarioForm').addEventListener('submit', function (event) {
    event.preventDefault();

    try {
        const name = document.getElementById('name').value;
        const age = parseInt(document.getElementById('age').value);
        const office = document.getElementById('office').value;
        let funcionario;

        if (!name || !age || isNaN(age)) {
            throw new Error('Preencha corretamente.');
        }

        if (office === 'Gerente') {
            const department = document.getElementById('department').value;
            if (!department) {
                throw new Error('Preencha Departamento para o gerente.');
            }
            funcionario = new Gerente(name, age, department);
        } else if (office === 'Desenvolvedor') {
            const language = document.getElementById('language').value;
            if (!language) {
                throw new Error('Preencha Linguagem de Programação para o desenvolvedor.');
            }
            funcionario = new Desenvolvedor(name, age, language);
        } else {
            throw new Error('Cargo inválido.');
        }

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `
            <p>${funcionario.seApresentar()}</p>
            <p>${funcionario.trabalhar()}</p>
        `;

        if (funcionario instanceof Gerente) {
            resultadoDiv.innerHTML += `<p>${funcionario.gerenciar()}</p>`;
        } else if (funcionario instanceof Desenvolvedor) {
            resultadoDiv.innerHTML += `<p>${funcionario.programar()}</p>`;
        }
    } catch (error) {
        exibirErro(error.message);
    }
});