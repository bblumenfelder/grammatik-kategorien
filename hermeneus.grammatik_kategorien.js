import Helpers from "../helpers/hermeneus.global_helpers";

export let GrammatikKategorien = Vue.component('grammatik-kategorien', {
    props: ['bestimmungen'],
    data: function () {
        return {
            Blacklisted: ['normal', 'alternativ', 'adjektiv', 'adverb', 'nomen', 'partikel', 'pronomen', 'verb'] ,
            AttributeFormatter: {
                'partizip': {'short': 'Part.', 'long': 'Partizip'},
                'imp': {'short': 'Imp.', 'long': 'Imperativ'},
                'pos': {'short': 'Pos.', 'long': 'Positiv'},
                'komp': {'short': 'Komp.', 'long': 'Komparativ'},
                'superl': {'short': 'Superl.', 'long': 'Superlativ'},
                'nom': {'short': 'Nom.', 'long': 'Nominativ'},
                'gen': {'short': 'Gen.', 'long': 'Genitiv'},
                'dat': {'short': 'Dat.', 'long': 'Dativ'},
                'akk': {'short': 'Akk.', 'long': 'Akkusativ'},
                'vok': {'short': 'Vok.', 'long': 'Vokativ'},
                'abl': {'short': 'Abl.', 'long': 'Ablativ'},
                'sg': {'short': 'Sg.', 'long': 'Singular'},
                'pl': {'short': 'Pl.', 'long': 'Plural'},
                'sg1': {'short': '1.Ps.Sg.', 'long': '1. Person Singular'},
                'sg2': {'short': '2.Ps.Sg.', 'long': '2. Person Singular'},
                'sg3': {'short': '3.Ps.Sg.', 'long': '3. Person Singular'},
                'pl1': {'short': '1.Ps.Pl.', 'long': '1. Person Plural'},
                'pl2': {'short': '2.Ps.Pl.', 'long': '2. Person Plural'},
                'pl3': {'short': '3.Ps.Pl.', 'long': '3. Person Plural'},
                'praesens': {'short': 'Präs.', 'long': 'Präsens'},
                'futur': {'short': 'Fut.', 'long': 'Futur'},
                'imperfekt': {'short': 'Impf.', 'long': 'Imperfekt'},
                'perfekt': {'short': 'Pf.', 'long': 'Perfekt'},
                'plqpf': {'short': 'Plqpf.', 'long': 'Plusquamperfekt'},
                'indikativ': {'short': 'Ind.', 'long': 'Indikativ'},
                'passiv': {'short': 'Pass.', 'long': 'Passiv'},
                'aktiv': {'short': 'Akt.', 'long': 'Aktiv'},
                'mask': {'short': 'Mask.', 'long': 'Maskulin'},
                'fem': {'short': 'Fem.', 'long': 'Feminin'},
                'neutr': {'short': 'Neutr.', 'long': 'Neutrum'},
            },
        }
    },
    computed: {
        formattedbestimmungen: function () {
            return this.bestimmungen.map(Bestimmungen => {
                return Bestimmungen.map(Attribute => {
                    if (Helpers.notInArray(Attribute, this.Blacklisted)) {
                        if (this.AttributeFormatter.hasOwnProperty(Attribute)) {
                            return this.AttributeFormatter[Attribute];
                        }
                        return {'short': Attribute, 'long': ''};
                    }
                    return null;
                }).filter( item => {return item !== null});
            });
        },

    },
    methods: {
        classObject (index, length) {
            return {
                'first': index === 0,
                'last': index === length - 1
            }
        },
        format (Attribute) {
            if (this.AttributeFormatter.hasOwnProperty(Attribute)) {
                return this.AttributeFormatter[Attribute];
            }
            return Attribute;
        },
        reformat (Attribute) {
            if (this.AttributeFormatter.hasOwnProperty(Attribute)) {
                return this.AttributeFormatter[Attribute];
            }
            return Attribute;
        },
        formatted (BestimmungenArray) {
            //return attribute;
        }

    },
    template:
        `
        <span v-if="bestimmungen" class="bestimmungen-container">
            <span v-for="bestimmung in formattedbestimmungen" class="analysis__grammatikkategorien--container">
                <span 
                v-for="(attribute, index) in bestimmung" 
                v-if="attribute"
                class="analysis__grammatikkategorien__kategorie" 
                v-bind:class="classObject(index, bestimmung.length)">
                    <span v-text="attribute.short" class="analysis__grammatikkategorien__kategorie--short"></span>
                    <span v-text="attribute.long" class="analysis__grammatikkategorien__kategorie--long"></span>
                </span>
            </span>
        </span>
        `
});