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
    <p>Welcome to the BGS Linked Data Server, (BGS-LDS). The BGS-LDS gives access to standardised and hierarchically-organized vocabularies used by BGS</p>
	<p>The British Geological Survey is a world-leading geological survey and global geoscience organisation, focused on public-good science for government and research to understand earth and environmental processes.</p>
    <p>We are the UK’s premier provider of objective and authoritative geoscientific data, information and knowledge to help society to use its natural resources responsibly, manage environmental change and be resilient to environmental hazards.</p>
    <p>This data is published as part of <a href="http://www.bgs.ac.uk/opengeoscience/home.html">BGS OpenGeoscience</a>. All data is the latest published version. For version history and bulk downloads see our <a href="https://github.com/BritishGeologicalSurvey/vocabularies">GitHub repository</a></p>	
	<p><a href="/about">Why BGS is publishing linked data and how to use it</a></p>
    <p>BGS use Prez, a Linked Data API with support for multiple data formats (JSON, CSV, JSON-LD, Turtle, RDF/XML).</p>
    <div class="prez-card-container">
        <RouterLink v-if="enabledPrezs.includes('CatPrez')" class="prez-card" to="/c">
            <h3>Data Catalog</h3>
            <p>General data catalog structured using DCAT metadata format.</p>
        </RouterLink>
        <RouterLink v-if="enabledPrezs.includes('SpacePrez')" class="prez-card" to="/s">
            <h3>Spatial Data Catalog</h3>
            <p>Spatial data catalog of GeoSPARQL spatial features with an API conforming to the OGC API specification. Uses DCAT for catalog metadata.</p>
        </RouterLink>
        <RouterLink v-if="enabledPrezs.includes('VocPrez')" class="prez-card" to="/v/vocab/rf:Lexicon">
            <h3>BGS Lexicon</h3>
            <p>The BGS Lexicon of Named Rock Units provides our definitions of the lithostratigraphic, lithodemic and lithomorphogenetic geological units of the UK and its continental shelf.</p>
        </RouterLink>
        <RouterLink v-if="enabledPrezs.includes('VocPrez')" class="prez-card" to="/v/vocab/rf:RockClass">
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