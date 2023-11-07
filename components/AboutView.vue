<script lang="ts" setup>
import { onMounted, inject } from "vue";
import { RouterLink } from "vue-router";
import { useUiStore } from "@/stores/ui";
import { enabledPrezsConfigKey, type PrezFlavour } from "@/types";

const ui = useUiStore();
const enabledPrezs = inject(enabledPrezsConfigKey) as PrezFlavour[];

onMounted(() => {
    ui.rightNavConfig = { enabled: false };
    document.title = "About | Prez";
    ui.pageHeading = { name: "Prez", url: "/" };
    ui.breadcrumbs = [{ name: "About", url: "/about" }];
});
</script>

<template>
    <h1 class="page-title">About</h1>
    <h2>About BGS Linked Data</h2>
	<p>Linked Data is about using the web to connect related data. Web addresses (URIs) are assigned to real-world things. Data about those things is published in machine-readable formats at the assigned addresses. Other datasets can then point to those things using their URIs, enabling people using the data to find out more about those things without that information being copied into the original dataset.</p>
	<p>Linked data allows powerful and easy re-use of data by interconnecting data, putting it in to context and enabling comparisons. By clearly representing the structure and meaning of the data it makes it easier to create applications and visualisations that use it.</p>
	<p>The use of linked data is being promoted by <a href="http://data.gov.uk/linked-data">data.gov.uk</a>  to open up access to government-funded, public data. BGS are publishing its data as linked data to accelerate its exploitation by all potential users. We hope that the release of our data in this format will stimulate new and innovative ways to use our information to help solve some of the environmental problems facing humankind today.</p>
	<br>
    <h2>Availability of data</h2>
    <p>BGS Linked Data is available free of charge for commercial, research and public use under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence</a>.<br>
    Please <a href="https://www.bgs.ac.uk/bgs-intellectual-property-rights/open-government-licence" target="_blank">acknowledge the material</a>.</p>
    <br>
    <h2>About Prez</h2>
    <p>
        Prez is an open source an Application Programming Interface (API) that implements <a
            href="https://www.w3.org/standards/semanticweb/data">Linked Data</a>
        methods for providing access to a wide range of data on the web. It also implements the <a
            href="https://docs.ogc.org/is/17-069r3/17-069r3.html">OGC API:Features</a>
        for spatial data.
    </p>
    <p>
        Prez comes in a number of "flavours", one or more of which may be implemented in any one Prez system:
    </p>
    <ul>
        <li v-if="enabledPrezs.includes('CatPrez')">
            <RouterLink to="/c">CatPrez</RouterLink> - for presenting data catalog information
        </li>
        <li v-if="enabledPrezs.includes('SpacePrez')">
            <RouterLink to="/s">SpacePrez</RouterLink> - for presenting spatial data
        </li>
        <li v-if="enabledPrezs.includes('VocPrez')">
            <RouterLink to="/v">VocPrez</RouterLink> - for presenting vocabularies
        </li>
    </ul>
    <p>Each enabled flavour will have links to its home page in the main menu.</p>
    <h2>License</h2>
    <p>Prez is licensed using the <a href="https://github.com/rdflib/prez/blob/main/LICENSE" target="_blank"
            rel="noopener noreferrer">BSD 3-Clause licence</a>.</p>
    <h2>Documentation</h2>
    <p>See <a href="http://rdflib.dev/prez/" target="_blank" rel="noopener noreferrer">http://rdflib.dev/prez/</a> for
        detailed Prez documentation.</p>
</template>

<style lang="scss" scoped></style>