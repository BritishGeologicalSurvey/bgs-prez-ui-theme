<script lang="ts" setup>
import PrezApp from "./PrezApp.vue";

const globalCss = import.meta.env.BASE_URL + "globals.css";
</script>

<template>
  <link rel="stylesheet" :href="globalCss" />

  <div class="prez-app">
    <header>
      <img src="/theme/BGS-Logo-Rev-RGB.svg" />
      <h1>BGS Linked Open Data</h1>
      <h2></h2>
    </header>
    <PrezApp />
    <footer>
      <div id="footer-col1">
        <p>
          <a href="https://www.bgs.ac.uk/contacts/" title="Contact us"
            >Contact us</a
          >
        </p>
        <p>
          <a
            href="https://www.bgs.ac.uk/comments/home.cfm"
            class="footerLink commentsBoxLink"
            title="e-mail the BGS webmaster with feedback about the site. Report broken links or missing information"
            >Webmaster</a
          >
        </p>
        <p>
          <a href="https://www.bgs.ac.uk/about/" title="About us">About us</a>
        </p>
        <p>
          <a
            href="https://www.bgs.ac.uk/opengeoscience/"
            title="OpenGeoscience - Free! Data,  Education, Maps, Pictures, Reports and Software."
            >OpenGeoscience</a
          >
        </p>
        <p>
          <a
            href="https://www.bgs.ac.uk/about/copyright/"
            title="Copyright - IPR, data licensing and acknowledgements"
            >Copyright</a
          >
        </p>
        <p>
          <a
            href="https://www.bgs.ac.uk/about/foi/home.html"
            title="Freedom of Information Act and Environmental Information Regulations"
            >FOI</a
          >
        </p>
        <p>
          <a
            href="https://www.bgs.ac.uk/help/privacy.html"
            title="BGS Privacy Policy"
            >Privacy</a
          >
          &amp; <a href="https://www.bgs.ac.uk/help/cookies.html">Cookies</a>
        </p>
        <p>
          <a
            href="https://www.bgs.ac.uk/help/terms_of_use.html"
            title="Website Terms of use"
            >Terms of use</a
          >
        </p>
        <p>
          <a
            href="https://www.bgs.ac.uk/about/copyright/acknowledgements_published.html"
            title="The BGS is a research centre of the Natural Environment Research Council"
            target="_blank"
            >© UKRI 2020</a
          >
        </p>
      </div>
      <div id="footer-col2">
        <a
          href="https://nerc.ukri.org/"
          title="The BGS is a research centre of the Natural Environment Research Council"
          target="_blank"
        >
          <img
            align="absmiddle"
            src="/theme/UKRI_NER_Council-Logo_Horiz-RGB_W_.png"
            title="The BGS is a research centre of the Natural Environment Research Council"
            alt="NERC UKRI Logo"
          />
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.prez-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

html {
  color: var(--blue);
  background-color: var(--white);
  font-family: Calibri, Helvetica, Verdana, Nimbus Sans L, sans-serif;
  font-size: 0.9em;
}

body {
  margin: 0px;
  padding: 0px;
}

header,
section,
footer,
nav {
  display: block;
  margin: 0px;
  padding: 0px;
  /* position:absolute; */
  left: 0px;
  right: 0px;
}

header {
  top: 0px;
  height: 120px;
  overflow: hidden;
}
nav {
  top: 120px;
  height: 30px;
  overflow: hidden;
}
section {
  top: 150px;
  bottom: 80px;
  overflow-y: scroll;
}
footer {
  margin-top: auto;
  height: 80px;
  overflow: hidden;
  /* position: absolute; */
  bottom: 0;
  width: 100%;
  background-color: var(--blue);
  color: #ffffff;
}

h1,
h2,
h3,
p,
th,
td,
li,
caption {
  margin: 0px;
  padding: 4px;
}

h1,
h2,
h3 {
  font-family: Aileron, sans-serif;
}

h1 {
  font-size: 150%;
}
h2 {
  font-size: 120%;
}
h3 {
  font-size: 110%;
}
p,
td,
th,
li {
  font-size: 100%;
}

header {
  background-color: var(--blue);
}

header > img {
  float: left;
  height: 90px;
  margin: 15px;
}
header > h1 {
  color: #ffffff;
  margin-left: 240px;
  margin-right: 5px;
  padding-bottom: 0px;
  text-align: right;
}
header > h2 {
  color: #ffffff;
  margin-left: 240px;
  margin-right: 5px;
  padding-top: 0px;
  text-align: right;
}

nav {
  text-align: right;
  background-color: #cccccc;
}
nav > ul > li > a.active {
  color: #c0c0c0;
}

nav > h3 {
  display: inline-block;
  float: left;
  margin: 4px;
  padding: 2px 4px;
}
nav > h3 > a {
  font-size: 120%;
  color: #900000;
}

section h1 {
  color: var(--blue);
  margin: 5px;
}
section h2 {
  color: var(--blue);
  background-color: #f0f0f0;
  border-bottom: 1px solid #c0c0c0;
}
section h3 {
  color: var(--blue);
  margin: 5px;
}

section > article {
  border: 1px solid #c0c0c0;
  margin: 10px;
}

section > article > ul {
  margin: 0px;
}
section > article > ul > li {
  display: block;
  margin: 2px 10px;
}
section > article > ul > li > a > img {
  width: 16px;
}

section > article.about,
section > article.search {
  height: 160px;
  overflow: hidden;
}
section > article.topConcept {
  overflow: hidden;
}

section > article > img {
  height: 160px;
  border-bottom-left-radius: 40px;
  margin: 0px;
}

section > article.about > img,
section > article.search > img {
  height: 160px;
  border-bottom-left-radius: 80px;
  border-top-left-radius: 80px;
}

section > article.topConcept > img {
  width: 120px;
  height: 120px;
  border-radius: 0px;
}

section > article > span.Concept {
  display: block;
}
section > article > span.Concept:last-child {
  border-bottom: none;
}

section > article.Concepts > span.Concept > ul > li > a {
  float: right;
}
section > article.Subconcepts > ul > li > a {
  float: right;
}
section > article.Predicates > ul > li > a {
  float: right;
}

section > article > span.Concept > h3 {
  margin: 1px 5px;
}
section > article > span.Concept > p {
  margin: 1px 5px;
}
span.Concept > p > img {
  cursor: pointer;
  opacity: 0.7;
}
span.Concept > p > img:hover {
  opacity: 1;
}

section > article > span.Concept > ul {
  display: block;
  padding: 5px;
  margin: 5px;
  overflow: auto;
}
section > article > span.Concept > ul > li {
  display: block;
  margin: 1px 5px;
}

table {
  background-color: #f0f0f0;
  margin: 10px;
  border-top: 1px solid #c0c0c0;
}

section > table {
  border: none;
  width: 98%;
}
section > ul {
  display: block;
  clear: both;
}

article.Subconcepts {
  clear: both;
}

table > caption {
  text-align: left;
  font-weight: bold;
  background-color: #f0f0f0;
  color: var(--blue);
  border: 1px solid #c0c0c0;
  border-bottom: none;
}
table > tfoot > tr > td {
  background-color: #f0f0f0;
  color: var(--blue);
  border: 1px solid #c0c0c0;
  border-top: none;
}

table > tbody > tr > * {
  border-bottom: 1px solid #c0c0c0;
  border-right: 1px solid #c0c0c0;
}
table > tbody > tr > th {
  font-style: italic;
  font-weight: normal;
  border-left: 1px solid #c0c0c0;
  text-align: right;
  vertical-align: top;
}

table > tbody > tr:nth-child(odd) > th {
  background-color: #e0e0e0;
}
table > tbody > tr:nth-child(odd) > td {
  background-color: #f0f0f0;
}
table > tbody > tr:nth-child(even) > th {
  background-color: #e9e9e9;
}
table > tbody > tr:nth-child(even) > td {
  background-color: #f9f9f9;
}

table > tbody > tr > th.group {
  text-align: left;
  font-weight: bold;
  color: var(--blue);
  background-color: #ffffff;
}

table > tbody > tr > td > a,
table > tbody > tr > td > span {
  display: inline-block;
}

table > tbody > tr > td > span.swatch {
  width: 2em;
  min-width: 2em;
  border: 1px solid #000000;
  border-radius: 5px;
  margin-right: 8px;
}
table > tbody > tr > td > span.string {
  color: var(--blue);
}
table > tbody > tr > td > span.integer {
  color: #800000;
  font-family: Consolas, Courier, Nimbus Mono L, Courier New, monospace;
}
table > tbody > tr > td > span.float {
  color: #903000;
  font-family: Consolas, Courier, Nimbus Mono L, Courier New, monospace;
}
table > tbody > tr > td > span.date {
  color: #40a060;
}

table > tbody > tr > td > a.relLink,
table > tbody > tr > td > a.extLink {
  color: #000080;
  border-bottom: 1px dotted #000080;
}
table > tbody > tr > td > a.relLink:hover,
table > tbody > tr > td > a.extLink:hover {
  color: #000060;
  border-bottom: 1px solid #000060;
  text-decoration: none;
}

table > tbody > tr > th > a {
  color: #808080;
  border-bottom: 1px dotted #808080;
}
table > tbody > tr > th > a:hover {
  color: #000000;
  border-bottom: 1px solid #000000;
  text-decoration: none;
}

textarea.XMLLiteral {
  color: #ffffff;
  border: 1px solid #202020;
  background-color: #404040;
  font-family: Consolas, Courier, Nimbus Mono L, Courier New, monospace;
  width: 98%;
  min-width: 20em;
  height: 10em;
  font-size: 11px;
}

table > tbody > tr > td > em {
  float: right;
  color: #808080;
  padding: 1px 4px;
}

table > tbody > tr > td.footer {
  border-left: 1px solid #c0c0c0;
  text-align: center;
  padding: 8px 4px;
}

ul {
  margin: 10px;
  padding: 0px;
  display: inline;
  list-style-type: none;
}

ul > li {
  display: inline-block;
  border: 1px solid #c0c0c0;
  background-color: #f0f0f0;
}

section > article > span.Concept > ul > li.examples {
  color: #404040;
  margin-top: 0px;
  border-top: 0px;
  margin-bottom: 4px;
}
section > article > span.Concept > ul > li.examples > ul > li {
  display: block;
  margin: 1px;
}

section > article.concepts > ul > li > a > img {
  magin: 2px;
}

ul > li:hover {
  background-color: var(--lt-gray);
}

section > article > span.Concept > ul > li.examples:hover {
  background-color: #f0f0f0;
}

a {
  text-decoration: none;
  color: var(--blue);
}
a:hover {
  text-decoration: underline;
  color: var(--ochre);
}

footer > div {
  display: inline-block;
  overflow: hidden;
  margin: 0px;
  padding: 0px;
}

footer > div#footer-col1 {
  width: calc(100% - 224px);
  vertical-align: top;
  text-align: left;
  height: 70px;
  margin: 5px 0px;
  overflow-y: auto;
}
footer > div#footer-col2 {
  width: 220px;
  vertical-align: top;
  text-align: right;
  height: 80px;
}

footer a > img {
  height: 60px;
  margin: 10px 0px;
}

footer a {
  color: #ffffff;
  text-decoration: none;
}

footer > div#footer-col1 > p {
  display: inline-block;
  width: 8em;
  padding: 1px 4px;
}

footer > div#footer-col2 > a {
  display: inline-block;
}

footer > div#footer-col2 > p {
  display: inline-block;
  width: 8em;
  height: 20px;
}

li > span.swatch,
li > span.toggle,
li > em.ageRange {
  display: inline-block;
  margin: 0px;
  padding: 0px;
  font-family: Consolas, Courier, Nimbus Mono L, Courier New, monospace;
}

li > span.swatch {
  height: 20px;
  width: 20px;
  border: 1px solid #404040;
  border-radius: 3px;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 50%;
}

li > span.toggle {
  height: 20px;
  width: 20px;
  margin-left: 12px;
  background-color: #ffffff;
  text-align: center;
  overflow: hidden;
  font-weight: bold;
  color: #404040;
  float: right;
  font-size: 1em;
  cursor: pointer;
  border: 1px solid #c0c0c0;
  border-radius: 3px;
}

#GeochronDivExplorer > ul > li > a {
  display: inline-block;
  border: 1px solid #c0c0c0;
  background-color: #ffffff;
  background-image: url(/img/info_small.png);
  background-repeat: no-repeat;
  background-position: 2px 50%;
  color: var(--blue);
  font-weight: bold;
  text-align: center;
  width: 2em;
  padding: 2px 4px;
  padding-left: 16px;
  border-radius: 3px;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
}

li > span.toggleBlank {
  background: transparent;
  cursor: default;
  border: none;
}

li > em.ageRange {
  float: right;
  color: #808080;
  font-size: 0.8em;
  margin-top: 3px;
  margin-right: 8px;
}

p.filterSort {
  text-align: center;
}

#filterTxt {
  width: 100px;
}

#lookAheadList {
  position: absolute;
  padding: 0px;
  margin: 0px;
  top: 0px;
  left: 0px;
  width: 400px;
  overflow-y: scroll;
  max-height: 300px;
  background-color: #eeeeff;
  z-index: 9;
  border: 1px solid #ccccdd;
  border-bottom: 1px solid #808090;
}

#lookAheadList > p {
  display: block;
  padding: 0px;
  margin: 1px;
  background-color: #ffffff;
  width: 20px;
  height: 20px;
  float: left;
  border: 1px solid #c0c0c0;
  border-radius: 50%;
}
#lookAheadList > p > img {
  display: block;
  padding: 2px;
  margin: 0px;
  width: 16px;
  height: 16px;
  opacity: 0.7;
  cursor: pointer;
}

#lookAheadList > p:hover > img {
  opacity: 1;
}

#lookAheadList > ul {
  text-align: left;
  margin: 0px;
}

#lookAheadList > ul > li {
  display: block;
  margin: 2px 4px;
  margin-left: 28px;
}
#lookAheadList > ul > li > a {
  float: right;
}

#lookAheadList > ul > li > a > strong {
  background-color: #ffeecc;
  color: #c00000;
  display: inline-block;
  margin: 0px;
  padding: 2px;
}
</style>
