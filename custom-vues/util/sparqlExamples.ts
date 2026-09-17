export default [
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
        title: "Get all triples for a given Lexicon code",
        shortTitle: "Get all triples for a given Lexicon code",
        description: "Get all triples for a given Lexicon code",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
SELECT *
WHERE {
?s ?p ?o; skos:notation ?code .
FILTER regex(str(?s), "Lexicon/NamedRockUnit")
FILTER (ucase(str(?code)) = "MMG")
}`
    }, 
    {
        title: "Lexicon/NamedRockUnit within age range sorted by age",
        shortTitle: "Lexicon/NamedRockUnit within age range sorted by age",
        description: "Lexicon/NamedRockUnit within age range sorted by age",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX pld: <http://purl.org/linked-data/registry#>
PREFIX lex: <http://data.bgs.ac.uk/ref/Lexicon/>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; skos:definition ?defn; pld:status ?status; lex:hasYoungestAgeValue ?minAge; lex:hasOldestAgeValue ?maxAge .
FILTER regex(str(?s), "Lexicon/NamedRockUnit")
FILTER (?p IN (skos:notation))
FILTER (?minAge >= 433.4)
FILTER (?maxAge <= 443.8)
} ORDER BY (ucase(?label)) OFFSET 0 LIMIT 100`
    },
    {
        title: "EarthMaterialClass/RockClassAll where label contains SAND, first 100 matches",
        shortTitle: "EarthMaterialClass/RockClassAll where label contains SAND",
        description: "EarthMaterialClass/RockClassAll where label contains SAND",
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
        title: "Geochronology/Division within age range sorted by age",
        shortTitle: "Geochronology/Division within age range sorted by age",
        description: "Geochronology/Division within age range sorted by age",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX gc: <http://data.bgs.ac.uk/ref/Geochronology/>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label; skos:notation ?code; gc:minAgeValue ?minAge; gc:maxAgeValue ?maxAge.
FILTER regex(str(?s), "Geochronology/Division")
FILTER (?p IN (skos:notation))
FILTER (?minAge >= 433.4)
FILTER (?maxAge <= 443.8)
} ORDER BY ?minAge`
    },
    {
        title: "Geoscience Thesaurus concepts matching SAND",
        shortTitle: "Geoscience Thesaurus concepts matching SAND",
        description: "Geoscience Thesaurus concepts matching SAND",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX pld: <http://purl.org/linked-data/registry#>
PREFIX lex: <http://data.bgs.ac.uk/ref/Lexicon/>
SELECT *
WHERE {
?s ?p ?o; skos:prefLabel ?label .
FILTER regex(str(?s), "GeoscienceThesaurus/Concept")
FILTER (?p IN (skos:prefLabel))
FILTER regex(ucase(str(?label)), "SAND")
} ORDER BY (ucase(?label)) OFFSET 0 LIMIT 100`
    },
	{
        title: "Geochronology Divisions within the Quaternary (Q)",
        shortTitle: "Geochronology Divisions within the Quaternary (Q)",
        description: "Geochronology Divisions within the Quaternary (Q)",
        query: `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

    SELECT DISTINCT ?narrower ?label ?notation
    WHERE {{
        <http://data.bgs.ac.uk/id/Geochronology/Division/Q> skos:narrower+ ?narrower .
        OPTIONAL {{ ?narrower skos:prefLabel ?label }}
        OPTIONAL {{ ?narrower skos:notation ?notation }}`
    }
];
