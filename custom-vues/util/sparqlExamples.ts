export default [
   {
        title: "Get all triples for a known “code” (skos:notation)",
        shortTitle: "Get all triples for a known “code” (skos:notation)",
        description: "This is a BGS example of a select query, which lists the first 10 triples.",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
SELECT *
WHERE {
?s ?p ?o; skos:notation ?code .
FILTER regex(str(?s), "Geochronology/Division")
FILTER (ucase(str(?code)) = "J")
}`
    }, 
    {
        title: "top-level Geochron for Lexicon search “maxAge” dropdown",
        shortTitle: "top-level Geochron for Lexicon search “maxAge” dropdown",
        description: "This is a BGS example of a select query, which lists the first 10 triples.",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX gc: <http://data.bgs.ac.uk/ref/Geochronology/>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; gc:minAgeValue ?minAge; gc:maxAgeValue ?maxAge.
FILTER regex(str(?s), "Geochronology/Division")
FILTER (?p IN (skos:notation))
FILTER (STRENDS(ucase(str(?label)), "EON") || STRENDS(ucase(str(?label)), "ERA") || STRENDS(ucase(str(?label)), "PERIOD") || STRENDS(ucase(str(?label)), "EPOCH"))
} ORDER BY ?minAge OFFSET 0 LIMIT 100`
    }, 
    {
        title: "Lexicon/NamedRockUnit - AGE ONLY",
        shortTitle: "Lexicon/NamedRockUnit - AGE ONLY",
        description: "This is a BGS example of a select query, which lists the first 10 triples.",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX pld: <http://purl.org/linked-data/registry#>
PREFIX lex: <http://data.bgs.ac.uk/ref/Lexicon/>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; skos:definition ?defn; pld:status ?status; lex:hasYoungestAgeValue ?minAge; lex:hasOldestAgeValue ?maxAge .
FILTER regex(str(?s), "Lexicon/NamedRockUnit")
FILTER (?p IN (skos:notation))
FILTER (?maxAge < 66)
} ORDER BY (ucase(?label)) OFFSET 0 LIMIT 100`
    },
   {
        title: "Lexicon/NamedRockUnit - CODE ONLY",
        shortTitle: "Lexicon/NamedRockUnit - CODE ONLY",
        description: "This is a BGS example of a select query, which lists the first 10 triples.",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX pld: <http://purl.org/linked-data/registry#>
PREFIX lex: <http://data.bgs.ac.uk/ref/Lexicon/>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; skos:definition ?defn; pld:status ?status; lex:hasYoungestAgeValue ?minAge; lex:hasOldestAgeValue ?maxAge .
FILTER regex(str(?s), "Lexicon/NamedRockUnit")
FILTER (?p IN (skos:notation))
FILTER regex(ucase(str(?code)), "SAND")
} ORDER BY (ucase(?code)) OFFSET 0 LIMIT 100`
    },
   {
        title: "Lexicon/NamedRockUnit - DESC ONLY",
        shortTitle: "Lexicon/NamedRockUnit - DESC ONLY",
        description: "This is a BGS example of a select query, which lists the first 10 triples.",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX pld: <http://purl.org/linked-data/registry#>
PREFIX lex: <http://data.bgs.ac.uk/ref/Lexicon/>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; skos:definition ?defn; pld:status ?status; lex:hasYoungestAgeValue ?minAge; lex:hasOldestAgeValue ?maxAge .
FILTER regex(str(?s), "Lexicon/NamedRockUnit")
FILTER (?p IN (skos:notation))
FILTER regex(ucase(str(?label)), "SAND")
} ORDER BY (ucase(?label)) OFFSET 0 LIMIT 100`
    },
    {
        title: "Lexicon/NamedRockUnit - AGE + CODE",
        shortTitle: "Lexicon/NamedRockUnit - AGE + CODE",
        description: "This is a BGS example of a select query, which lists the first 10 triples.",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX pld: <http://purl.org/linked-data/registry#>
PREFIX lex: <http://data.bgs.ac.uk/ref/Lexicon/>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; skos:definition ?defn; pld:status ?status; lex:hasYoungestAgeValue ?minAge; lex:hasOldestAgeValue ?maxAge .
FILTER regex(str(?s), "Lexicon/NamedRockUnit")
FILTER (?p IN (skos:notation))v
FILTER regex(ucase(str(?label)), "SAN")
FILTER (?maxAge < 66)
} ORDER BY (ucase(?label)) OFFSET 0 LIMIT 100`
    },
    {
        title: "Lexicon/NamedRockUnit - AGE + DESC",
        shortTitle: "Lexicon/NamedRockUnit - AGE + DESC",
        description: "This is a BGS example of a select query, which lists the first 10 triples.",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX pld: <http://purl.org/linked-data/registry#>
PREFIX lex: <http://data.bgs.ac.uk/ref/Lexicon/>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; skos:definition ?defn; pld:status ?status; lex:hasYoungestAgeValue ?minAge; lex:hasOldestAgeValue ?maxAge .
FILTER regex(str(?s), "Lexicon/NamedRockUnit")
FILTER (?p IN (skos:notation))
FILTER regex(ucase(str(?label)), "SANDST")
FILTER (?maxAge < 66)
} ORDER BY (ucase(?label)) OFFSET 0 LIMIT 100`
    },
    {
        title: "Lexicon/NamedRockUnit - CODE + DESC",
        shortTitle: "Lexicon/NamedRockUnit - CODE + DESC",
        description: "This is a BGS example of a select query, which lists the first 10 triples.",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX pld: <http://purl.org/linked-data/registry#>
PREFIX lex: <http://data.bgs.ac.uk/ref/Lexicon/>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; skos:definition ?defn; pld:status ?status; lex:hasYoungestAgeValue ?minAge; lex:hasOldestAgeValue ?maxAge .
FILTER regex(str(?s), "Lexicon/NamedRockUnit")
FILTER (?p IN (skos:notation))
FILTER regex(ucase(str(?code)), "SAND")
FILTER regex(ucase(str(?label)), "SANDST")
} ORDER BY (ucase(?label)) OFFSET 0 LIMIT 100`
    },
    {
        title: "Lexicon/NamedRockUnit - CODE + DESC + AGE",
        shortTitle: "Lexicon/NamedRockUnit - CODE + DESC + AGE",
        description: "This is a BGS example of a select query, which lists the first 10 triples.",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX pld: <http://purl.org/linked-data/registry#>
PREFIX lex: <http://data.bgs.ac.uk/ref/Lexicon/>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; skos:definition ?defn; pld:status ?status; lex:hasYoungestAgeValue ?minAge; lex:hasOldestAgeValue ?maxAge .
FILTER regex(str(?s), "Lexicon/NamedRockUnit")
FILTER (?p IN (skos:notation))
FILTER regex(ucase(str(?label)), "SANDS")
FILTER (?maxAge < 66)
} ORDER BY (ucase(?label)) OFFSET 0 LIMIT 100`
    },
    {
        title: "Geochronology/Division - DESC ONLY",
        shortTitle: "Geochronology/Division - DESC ONLY",
        description: "This is a basic example of a select query, which lists the first 10 triples.",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX gc: <http://data.bgs.ac.uk/ref/Geochronology/>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; gc:minAgeValue ?minAge; gc:maxAgeValue ?maxAge.
FILTER regex(str(?s), "Geochronology/Division")
FILTER (?p IN (skos:notation))
FILTER regex(ucase(str(?label)), "JUR")
} ORDER BY (ucase(?label)) OFFSET 0 LIMIT 100`
    },
    {
        title: "Geochronology/Division - CODE ONLY",
        shortTitle: "Geochronology/Division - CODE ONLY",
        description: "This is a basic example of a select query, which lists the first 10 triples.",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX gc: <http://data.bgs.ac.uk/ref/Geochronology/>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; gc:minAgeValue ?minAge; gc:maxAgeValue ?maxAge.
FILTER regex(str(?s), "Geochronology/Division")
FILTER (?p IN (skos:notation))
FILTER regex(ucase(str(?code)), "J")
} ORDER BY (ucase(?code)) OFFSET 0 LIMIT 100`
    },
    {
        title: "Geochronology/Division - DESC + CODE",
        shortTitle: "Geochronology/Division - DESC + CODE",
        description: "This is a basic example of a select query, which lists the first 10 triples.",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX gc: <http://data.bgs.ac.uk/ref/Geochronology/>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; gc:minAgeValue ?minAge; gc:maxAgeValue ?maxAge.
FILTER regex(str(?s), "Geochronology/Division")
FILTER (?p IN (skos:notation))
FILTER regex(ucase(str(?code)), "J")
FILTER regex(ucase(str(?label)), "JUR")
} ORDER BY (ucase(?label)) OFFSET 0 LIMIT 100`
    },
    {
        title: "EarthMaterialClass/RockClassAll - DESC ONLY",
        shortTitle: "EarthMaterialClass/RockClassAll - DESC ONLY",
        description: "This is a basic example of a select query, which lists the first 10 triples.",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; .
FILTER regex(str(?s), "EarthMaterialClass/RockClassAll")
FILTER (?p IN (skos:notation))
FILTER regex(ucase(str(?label)), "SAND")
} ORDER BY (ucase(?label)) OFFSET 0 LIMIT 100`
    },
    {
        title: "EarthMaterialClass/RockClassAll - CODE ONLY",
        shortTitle: "EarthMaterialClass/RockClassAll - CODE ONLY",
        description: "This is a basic example of a select query, which lists the first 10 triples.",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; .
FILTER regex(str(?s), "EarthMaterialClass/RockClassAll")
FILTER (?p IN (skos:notation))
FILTER regex(ucase(str(?code)), "S")
} ORDER BY (ucase(?code)) OFFSET 0 LIMIT 100`
    },
    {
        title: "EarthMaterialClass/RockClassAll - DESC + CODE",
        shortTitle: "EarthMaterialClass/RockClassAll - DESC + CODE",
        description: "This is a basic example of a select query, which lists the first 10 triples.",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; .
FILTER regex(str(?s), "EarthMaterialClass/RockClassAll")
FILTER (?p IN (skos:notation))
FILTER regex(ucase(str(?code)), "S")
FILTER regex(ucase(str(?label)), "CARBON")
} ORDER BY (ucase(?label)) OFFSET 0 LIMIT 100`
    },
    {
        title: "Geochronology/Division overlapping Lexicon “minAge/maxAge” e.g. Lexicon ABF “Abbotsford Flags” (433.4 to 443.8)",
        shortTitle: "Geochronology/Division overlapping Lexicon “minAge/maxAge” e.g. Lexicon ABF “Abbotsford Flags” (433.4 to 443.8)",
        description: "This is a basic example of a select query, which lists the first 10 triples.",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX gc: <http://data.bgs.ac.uk/ref/Geochronology/>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; gc:minAgeValue ?minAge; gc:maxAgeValue ?maxAge.
FILTER regex(str(?s), "Geochronology/Division")
FILTER (?p IN (skos:notation))
FILTER (?minAge >= 433.4)
FILTER (?maxAge <= 443.8)
} ORDER BY ?minAge OFFSET 0 LIMIT 100`
    },
    {
        title: "Example Select Query",
        shortTitle: "Basic Select",
        description: "This is a basic example of a select query, which lists the first 10 triples.",
        query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT *
WHERE {
    ?s ?p ?o .
} LIMIT 10`
    },
    {
        title: "Example Construct Query",
        shortTitle: "Basic Construct",
        description: "This is a basic example of a construct query, which constructs a graph of the first 10 triples.",
        query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
CONSTRUCT {
    ?s ?p ?o .
}
WHERE {
    ?s ?p ?o .
} LIMIT 10`
    },
    {
        title: "Vocabularies - Counting Concepts",
        shortTitle: "Concept Count",
        description: "Here is an example query for VocPrez you can copy 'n paste into the Query UI text area above to test with. It counts the number of vocabulary Concepts in the all vocabularies in this system and will return an integer: ",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT (COUNT(?c) AS ?count)
WHERE {
    ?c a skos:Concept .
}`
    },
    {
        title: "Spatial Data Catalog - Basic Feature Information",
        shortTitle: "Feature Info",
        description: "Here is an example query for SpacePrez for use in the Query UI above. It returns most two Features' URIs and their titles.",
        query: `PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?uri ?title
WHERE {
    ?uri a geo:Feature ;
        dcterms:title|rdfs:label ?title .
}
LIMIT 2`
    },
];
