<script lang="ts" setup>
import { inject, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useUiStore } from "@/stores/ui";
import { enabledPrezsConfigKey, type PrezFlavour } from "@/types";

const ui = useUiStore();

const enabledPrezs = inject(enabledPrezsConfigKey) as PrezFlavour[];

onMounted(() => {
    ui.rightNavConfig = { enabled: false };
    document.title = "Prez";
    ui.pageHeading = { name: "Prez", url: "/"};
    ui.breadcrumbs = [];
});
</script>

<template>
    <h1 class="page-title">Welcome to BGS Linked Open Data</h1>
    <p>This site gives access to standardised and hierarchically-organized vocabularies used by BGS</p>
	<p>available under the Open Government Licence, subject to the following acknowledgement accompanying the reproduced BGS materials: ‘Contains British Geological Survey materials © UKRI [year]’. Traditional search applications for Lexicon and Rock Classification Scheme are also available, please see the <a href="https://www.bgs.ac.uk/information-hub/dictionaries/vocabularies/">main BGS website vocabularies page</a>, and other environmental vocabularies hosted on the <a href="https://vocab.nerc.ac.uk/" target="_blank"> NERC vocabulary server</a>. 
	<p>All data is the latest published version. For version history and bulk downloads see our <a href="https://github.com/BritishGeologicalSurvey/vocabularies">GitHub repository</a></p>	
	<p><a href="/about">Why BGS is publishing linked data and how to use it</a></p>
    <p>This site is built using <a href="https://github.com/RDFLib/prez" target="_blank">Prez</a> , a Linked Data API with support for multiple data formats (JSON, CSV, JSON-LD, Turtle, RDF/XML) and both RESTful and SPARQL endpoints. The frontend is provided by a customised version of <a href="https://github.com/RDFLib/prez-ui" target="_blank">Prez-UI</a></p>
    <div class="prez-card-container">
        <RouterLink v-if="enabledPrezs.includes('CatPrez')" class="prez-card" to="/c">
            <h3>Data Catalog</h3>
            <p>General data catalog structured using DCAT metadata format.</p>
        </RouterLink>
        <RouterLink v-if="enabledPrezs.includes('SpacePrez')" class="prez-card" to="/s">
            <h3>Spatial Data Catalog</h3>
            <p>Spatial data catalog of GeoSPARQL spatial features with an API conforming to the OGC API specification. Uses DCAT for catalog metadata.</p>
        </RouterLink>
        <RouterLink v-if="enabledPrezs.includes('VocPrez')" class="prez-card" to="/v/vocab/lxcn:NamedRockUnit">
            <h3>BGS Lexicon</h3>
            <p>The BGS Lexicon of Named Rock Units provides our definitions of the lithostratigraphic, lithodemic and lithomorphogenetic geological units of the UK and its continental shelf.</p>
        </RouterLink>
        <RouterLink v-if="enabledPrezs.includes('VocPrez')" class="prez-card" to="/v/vocab/rthmtrlclss:RockClassAll">
            <h3>BGS Rock Classification</h3>
            <p>The BGS Rock Classification Scheme classifies all types of earth material or other substance that may be recorded in a geological log or section</p>
        </RouterLink>
        <RouterLink v-if="enabledPrezs.includes('VocPrez')" class="prez-card" to="/v">
            <h3>All Vocabularies</h3>
            <p>BGS SKOS vocabularies conforming to the VocPub profile.</p>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

.prez-card-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;

    .prez-card {
        padding: 20px;
        background-color: var(--cardBg);
        flex: 1;
        color: unset;
        border-radius: $borderRadius;

        h3 {
            margin-top: 0;
            color: var(--primary);
        }
    }
}
</style>
