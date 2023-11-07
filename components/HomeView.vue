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
    <h1 class="page-title">Welcome to BGS Linked Data</h1>
	<p>The British Geological Survey (BGS) is the United Kingdom's premier centre for earth science information and expertise. This data is published as part of <a href="http://www.bgs.ac.uk/opengeoscience/home.html">BGS OpenGeoscience</a>.</p>
	<p>All data is the latest published version. For version history and bulk downloads see <a href="https://github.com/BritishGeologicalSurvey/vocabularies">GitHub repository</a></p>	
	<p><a href="/about">Find out why BGS is publishing linked data and how to use it</a></p>
    <p>BGS use Prez is a Linked Data API with support for multiple data formats (JSON, CSV, JSON-LD, Turtle, RDF/XML).</p>
    <div class="prez-card-container">
        <RouterLink v-if="enabledPrezs.includes('CatPrez')" class="prez-card" to="/c">
            <h3>Data Catalog</h3>
            <p>General data catalog structured using DCAT metadata format.</p>
        </RouterLink>
        <RouterLink v-if="enabledPrezs.includes('SpacePrez')" class="prez-card" to="/s">
            <h3>Spatial Data Catalog</h3>
            <p>Spatial data catalog of GeoSPARQL spatial features with an API conforming to the OGC API specification. Uses DCAT for catalog metadata.</p>
        </RouterLink>
        <RouterLink v-if="enabledPrezs.includes('VocPrez')" class="prez-card" to="/v">
            <h3>Vocabularies</h3>
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