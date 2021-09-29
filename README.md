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
#### Installation
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

#### Hur funkar det?
Är servern igång och fungerar så skriver jag in följande url i min webläsare
```` http://localhost:5000/players```` 

Då ser jag följande information i min webbläsare

```` {"message":"Hämtar alla värden","items":[{"id":"1","name":"Ove Andre","birthdate":"1992-02-09T23:00:00.000Z","points":12,"description":"Paddelkungen från kungsan!            ","team_id":"1"},{"id":"3","name":"Larry Page","birthdate":"1928-02-09T23:00:00.000Z","points":222,"description":"Paddelyra ! ","team_id":"2"},{"id":"4","name":"Kurt Ove","birthdate":"1992-02-08T23:00:00.000Z","points":56,"description":"Paddel med stort P!]}```` 
##### Params
Lägger jag till / fljt av id på mitt anrop så får jag endast den personen som har det idet, i exemplet nedan id 1.
```` http://localhost:5000/players/1```` 

Då ser jag följande information i min webbläsare. Detta kallas för params

```` [{"id":"1","name":"Ove Andre","birthdate":"1992-02-09T23:00:00.000Z","points":12,"description":"Paddelkungen från kungsan!      ","team_id":"1"}]```` 
##### Query
I vissa fall vill jag skicka med mer information då använder man operatorn "?" för att förklara för datorn att det är en såkallad query som ska läggas till. Jag kan ha flera queries och då börjar alla utom första med &(och) följt av vad jag vill kalla queryn t.ex name eller age.

```` http://localhost:5000/players/1?name='Leif Andre'&age=28 ```` 

I exemplet ovan så skickar jag med queryn name med värdet 'Leif Andre' samt age med värdet 28. Anledningen att Leif Andre har '' runt sig är för det innehåller ett mellanrum, är det bara en sammanhängande text ex Leif så behövs inte ''. 
_Viktigt! Tänk på att om ni ska skicka in 'Leif Andre' i till exempel en Postgressql query (anrop) så måste det göras om till "Leif Andre"_

```` 
params: 1 
query:{ name: "'Leif Andre'", age: '28' }
```` 

##### body
Om jag vill skicka in värden till API:et anväder jag när jag testar ett program som heter Postman eller verktyget ThunderClient i VScode. Där gör jag exakt som i webbläsaren och lägger in urlen nedan
```` http://localhost:5000/players/ ```` 
Har jag anropet inställt på GET (en dropdown i anslutning till där jag lägger in urlen) så hämtar den likt i del 1 alla spelare. Skulle jag ändra detta till POST, PATCH PUT eller DElETE så blir det en annan typ av anrop. I denna andra form av anrop så kan det i viss fall som till exempel delete räcka med att vi skickar in params /1 (id) för att veta att det är första id:et vi vill ta bort. Men använder vi Post (lägga till) eller Put/Patch (Lägg till/ändra) så vill vi ofta skicka med ytterliggare information. Detta går såklart att göra med queries som ovan men det finns två problem med det. 
1. URL:en blir väldigt lång om vi ska ha query med name, age, country, city, pets...
2. Datat som vi skickar med visas i urlfältet, ibland vill vi kanske inte berätta för användaren vad vi skickar med, t.ex känsliga uppgifter som idn på objekt eller mailadresser/nummer.
Därför använder vi i många av dessa fall body istället. För att använda Body i Thunderclient så välj Body samt JSON i inställningarna och klistra in det du vill skicka med, i detta fall i JSON format.
![alt text](https://i.ibb.co/sKxCDXB/SendPost.png "POST request")

### Skapa en frontend
Frontenden får ni göra på det sätt ni tycker passar, det kan vara en mobilapp med Quasar, en SvelteApp eller att man använder den färdiga [Vue-grundemallen](https://github.com/abbjoafli/Vue_clean/tree/master/Vue_Clean) från min github. För att kunna skicka och ta emot anrop från API:et så rekomenderar jag att man använder [Axios](https://www.npmjs.com/package/axios).
Nedan är ett exempel på ett Axiosanropp där vi anropar routen /players från localhost. Då hämtar vi alla spelae i min paddelexempeldatabas och skriver först ut all info sedan bara första personens info sedan bara första personens namn.
```` 
<template>
  <v-container grid-list-md text-xs-center>
    <v-flex xs12>
      <v-layout row wrap>
        {{ info }}
        {{ info[1] }}
 
        {{ info[1].name }}
      </v-layout>
    </v-flex>
  </v-container>
</template>
 
<script>
export default {
  mounted() {
    this.axios.get("http://localhost:5000/players").then((result) => {
      this.info = result.data;
    });
  },
 
  data: () => ({ info: "hej" }),
};
</script>
 
```` 


