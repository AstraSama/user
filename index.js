let usuarios_salvos = [
]
let usuarios = {
    nome: "",
    email: "",
    idade: ""
}

let passo = 0;
let email_adm = "user@lions.com";
let senha = "senha1234";
let tentativas = 0

process.stdout.write("Digite 'adm' para entrar como administrador ou 'user' para entrar como usuário.\nResposta: ");

process.stdin.on('data', function(data) {
    let resposta = data.toString().trim();

    switch(passo) {
        case 0:
            let aux0 = resposta;

            if(aux0 == "adm") {
                process.stdout.write("Digite seu email: ");
                passo = 1;
                
            } else if(aux0 == "user") {
                process.stdout.write("Digite seu email.\nResposta: ");
                passo = 10;
                
            }
            break;
            
            case 1:
                let aux1 = resposta;
                
                if(email_adm == aux1) {
                    process.stdout.write("Digite sua senha: ");
                    passo = 2;
                    tentativas = 0;
                } else {
                    process.stdout.write("Email errado, Digite novamente: ");
                    tentativas++;

                } 

                if(tentativas > 3) {
                    process.stdout.write("\nFalha ao conectar");
                    process.exit();

                }
                
                break;
                
                case 2:
                    let aux2 = resposta;
                    
                    if(aux2 == senha) {
                        process.stdout.write("\nDigite 'add' para adicionar novo usuário.\nDigite 'search' para procurar um usuario.\nDigite 'rem' para remover usuário.\nResposta: ");
                        passo = 3;
                        tentativas = 0;

                    } else {
                        process.stdout.write("\nSenha errada, digite novamente: ");
                        tentativas++;

                    }
                    
                    if(tentativas > 3) {
                        process.stdout.write("\nFalha ao conectar");
                        process.exit();

                    }
                    
                    break;
                    
                case 3:
                    let aux3 = resposta;

                    if(aux3 == "add") {
                        process.stdout.write("\nDigite o nome desse usuário: ");
                        passo = 4;
                    
                    } else if(aux3 == "search") {
                        process.stdout.write("\nDigite o nome ou email desse usuário: ");
                        passo = 8;
                    
                    } else if(aux3 == "rem") {
                        process.stdout.write("\nDigite o nome ou email desse usuário: ");
                        passo = 9;
                    }
                break;

                case 4:
                    usuarios.nome = resposta;

                    process.stdout.write("\nDigite o email desse usuario: ");
                    passo = 5;

                break;
                
                case 5:
                    usuarios.email = resposta;

                    process.stdout.write("\nDigite a idade desse usuário: ");
                    passo = 6;

                break;

                case 6:
                    usuarios.idade = Number(resposta);

                    usuarios_salvos.push(usuarios);

                    usuarios = {
                        nome: "",
                        email: "",
                        idade: ""
                    }

                    process.stdout.write("\nContinuar como adm?\nResponda 'sim' ou 'não': ");
                    passo = 7;

                break;

                case 7:
                    let aux7 = resposta;

                    if(aux7 == "sim") {
                        process.stdout.write("\nDigite 'add' para adicionar novo usuário.\nDigite 'search' para procurar um usuario.\nDigite 'rem' para remover usuário.\nResposta: ");
                        passo = 3;

                    } else if(aux7 == "não") {
                        process.stdout.write("\nDigite 'adm' para entrar como administrador ou 'user' para entrar como usuário.\nResposta: ");
                        passo = 0;

                    }
                break;

                case 8:
                    let aux8 = resposta;
                    let aux8_2 = ""


                    for(let i = 0; i < usuarios_salvos.length; i++) {
                        if(usuarios_salvos[i].email.includes(aux8) || usuarios_salvos[i].nome.includes(aux8)) {
                            aux8_2 = 1;

                        }
                    }
                    if(aux8_2) {
                        process.stdout.write("\nO usuário está cadastrado.\n ");

                    } else {
                        process.stdout.write("\nO usuário não está cadastrado.\n ");
                    }

                    process.stdout.write("\nContinuar como adm?\nResponda 'sim' ou 'não': ");
                    passo = 7;

                break;

                case 9:
                    let aux9 = resposta;
                    let aux9_2 = ""


                    for(let i = 0; i < usuarios_salvos.length; i++) {
                        if(usuarios_salvos[i].email.includes(aux9) || usuarios_salvos[i].nome.includes(aux9)) {
                            aux9_2 = 1;

                        }
                    }
                    if(aux9_2) {
                        process.stdout.write("\nO usuário está cadastrado.\n ");
                        for(let i = 0; i < usuarios_salvos.length; i++) {
                            if(usuarios_salvos[i].email.includes(aux9) || usuarios_salvos[i].nome.includes(aux9)) {
                                usuarios_salvos.splice(i, 1);
                                process.stdout.write("\nUsuario removido.\n")
    
                            }
                        }

                    } else {
                        process.stdout.write("\nO usuário não está cadastrado.\n ");
                    }

                    process.stdout.write("\nContinuar como adm?\nResponda 'sim' ou 'não': ");
                    passo = 7;
                break;

                case 10:
                    let aux10 = resposta;
                    let aux10_2 = ""


                    for(let i = 0; i < usuarios_salvos.length; i++) {
                        if(usuarios_salvos[i].email.includes(aux10) || usuarios_salvos[i].nome.includes(aux10)) {
                            aux10_2 = 1;

                        }
                    }
                    if(aux10_2) {
                        process.stdout.write("\nO usuário está cadastrado.\n ");

                    } else {
                        process.stdout.write("\nO usuário não está cadastrado.\n ");
                    }

                    process.stdout.write("\nContinuar?\nResponda 'sim' ou 'não': ");
                    passo = 11;

                break;

                case 11:
                    let aux11 = resposta;

                    if(aux11 == "sim") {
                        process.stdout.write("\nDigite 'adm' para entrar como administrador ou 'user' para entrar como usuário.\nResposta: ");
                        passo = 0;

                    } else if(aux11 == "não") {
                        console.log(usuarios_salvos);
                        process.exit();

                    }
                break;
            }
        })