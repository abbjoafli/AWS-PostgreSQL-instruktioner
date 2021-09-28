# AWS-PostgreSQL-instruktioner
Här finns instruktioner och resurser för AWS postgres projektet.

## Bakgrund
I detta projekt ska vi arbeta med Amazon Webservices molntjänst även kallad AWS. Du har fått en aktiveringslänk mailad till dig som går till AWS Education. här får du tillgång till en summa på 50-100 $ som du kan använda olika AWS tjänster för, vissa är dock gratis. Det vi ska använda i detta projekt är AWS RDS (Relational Database Services), vilket är en databastjänst där vi kommer köra en typ av databas som heter PostGresSQL. SQL har du nog hört talas om, PostGresSQL är en avstickare på den likt SQLLite ller Maria DB. 

### Varför
Vi arbetar med AWS för de är den största molntjänsten just nu och postgresSQL för att ni ska få känna på och behärska SQL databas vilken även den är extremt vanlig i många större företag. Firebase är en noSQL databas och används mer i startupbolag för att få perspektiv. Skillnaden mellan SQL och NoSQL är förenklat att NoSQL innehåller inga fasta kolumner utan olika inlägg kan innehålla olika typer av värden. SQL är mer strukturerat och låst där alla inlägg innehåller samma typ av värden.

### Hur ska vi arbeta?
Vi ska fortsätta utmana vår självgående förmåga och problemlösning därav kommer vi att arbeta ifrån resurser på internet där vi tar de delar som är relevanta för vårt projekt eller inlärningsmål.

### Mjukvara vi ska använda?
Vi kommer arbeta med en SQLeditor som heter [PGAdmin](https://www.pgadmin.org/download/pgadmin-4-windows/). Med den kommer vi koppla upp till vår databas som vi skapat på AWS med RDS tjänsten.

## Inlärning
Vi kommer arbeta ett antal timmar med att lära oss och bli lite bekanta med AWS, PostgresSQL och PGAdmin innan vi kör igång med ett skarpt projekt.
Detta kommer vi göra fritt men jag har med tips på en arbetsordning samt länkar som jag rekomenderar.

### Länk tips
- [How to create and connect to your AWS RDS (Relational Database Services) instance](https://medium.com/@NatalieOlivo/how-to-create-and-connect-to-your-aws-rds-relational-database-services-instance-a48a1ae7f8fe)
- [How to use pgAdmin](https://medium.com/@malexmad/how-to-use-pgadmin-a9addc7ff46c)
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com)
- [Tutorialpoints PostgreSQL Tutorial](https://www.tutorialspoint.com/postgresql/index.htm)
- [Hur du öppnar upp åtkomst till din databas.](https://stackoverflow.com/questions/61062027/aws-rds-to-pgadmin-error-saving-properties-unable-to-connect-to-server-timeout)

### Rekomenderad ordning
1. [How to create and connect to your AWS RDS (Relational Database Services) instance](https://medium.com/@NatalieOlivo/how-to-create-and-connect-to-your-aws-rds-relational-database-services-instance-a48a1ae7f8fe) Följ fram till steg 10 sedan går vi vidare till pgAdmin och använder den istället för terminalprogrammet psql (postgressql).
2. [How to use pgAdmin](https://medium.com/@malexmad/how-to-use-pgadmin-a9addc7ff46c), framförallt delen 'Connect an Existing Database' men kika över hela.
3. Om du inte kommer åt din databas från PGadmin så in och kika på den här artikeln. [Hur du öppnar upp åtkomst till din databas.](https://stackoverflow.com/questions/61062027/aws-rds-to-pgadmin-error-saving-properties-unable-to-connect-to-server-timeout)
4. [PostgreSQL Tutorial](https://www.postgresqltutorial.com) Välj själv 4an eller 5an!
5. [Tutorialpoints PostgreSQL Tutorial](https://www.tutorialspoint.com/postgresql/index.htm)




## Projekt
I detta miniprojekt ska du (och en partner) bestämma vad ni ska skapa för databas. Det kan vara rörande fotboll, böcker, snabbmatchskedjor eller vad som helst.
För projektet har ni fem timmar till ert förfogande och er uppgift är delad i två, först skapa en bra databaskarta, sedan bygga den i postgressql.

Ni följer instruktionerna och arbetssättet vi implementerat hittils.


### API
Det finns ett exemple api delat i undermappen API. Där är allt kopplat till exempeldatabasen som är inriktad på paddel. 
Ladda ner API mappen, ändra den till dina egna tabelller. Skapa en fil som heter .env där i lägger du information för att ansluta till din databas, den ska se ut som nedan, fast med din information såklart:

```` 
POSTGRESQL_DB_HOST = exmp.c1acms328w62.us-east-1.rds.amazonaws.com
POSTGRESQL_DB_USER = postgres
POSTGRESQL_DB_PASSWORD = password
POSTGRESQL_DB = database
```` 

För att starta:
1. Starta cmd i din önskade destinationsmapp, skriv "git clone https://github.com/abbjoafli/AWS-PostgreSQL-instruktioner.git " 
2.  fortsätt i cmd genom att skriva "cd AWS-PostgreSQL-instruktioner/API"
3.  fortsätt med att installera biblioteken som används genom att skriva "npm install"
4.  kör nu programmet genom att skriva "npm run dev"





