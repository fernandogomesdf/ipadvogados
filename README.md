# ipadvogados
site do israel

curl --location --request POST 'http://ipadvogados.com/sqlite-rest/services/mail/enviar' \
--header 'Content-Type: application/json' \
--data '{
    "nome" : "Fer",
    "telefone": "123",
    "email" : "11@uu.com",
    "texto" : "meu texto"
}'
