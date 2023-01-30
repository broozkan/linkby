<script>
export default {
    props: {
        items: Object
    },
    data() {
        let uniqueScores = this.items.map(()=> {
            if (uniqueScores.indexOf(item.score) === -1) {
                uniqueScores.push(item.score);
            }
        });
        return {
            scores: uniqueScores
        }
    },

}

</script>

<template>
    <div id="items">
        <h1>{{ items.name }}</h1>
        <div v-for="score in scores" class="item">
            <h3>Items with Score {{ item.score }}</h3>
            <ul>
                <li v-for="(item, index) in item.items">
                    <span v-if="item.score == score" >{{ item.name }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>