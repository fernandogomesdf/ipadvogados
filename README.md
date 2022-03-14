# ipadvogados
site do israel

curl --location --request POST 'https://ipadvogados.com/sqlite-rest/services/mail/enviar' \
--header 'Content-Type: application/json' \
--data '{
    "nome" : "Fer",
    "telefone": "123",
    "email" : "11@uu.com",
    "texto" : "meu texto"
}' --insecure
