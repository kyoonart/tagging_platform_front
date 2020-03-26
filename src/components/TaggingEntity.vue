<template>
<div>
    <div class="box1">
        <textarea @click="getTextIndex" v-model="sentence" />
    </div>

    <div class="box2">
        <div style="margin-top: 20px">
            <el-tag v-for="(result,index) in results" :key="result.id" type="success" closable @close="handleClose(result,index)">
                {{result.entity}}
            </el-tag>
        </div>
    </div>

    <div class="box2">
        <div style="margin-top: 20px">
            <el-radio-group v-model="padding" @change="handleSelectType">
                <el-radio-button v-for=" type in entityTypes" :label="type.id" :key="type.name">
                    {{type.name}}
                </el-radio-button>
            </el-radio-group>
        </div>
    </div>
    <div class="btn">
        <el-button type="primary" round @click='handleSave'>save</el-button>
        <el-button type="primary" round @click="getSentence">next</el-button>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {

            entityTypes: [],
            padding: [],

            sentence: '',
            sentence_id: 0,
            pos: '',
            results: [],
            order: 0

        };

    },
    created() {
        this.getSentence();
        this.listEntityTypes();
    },
    methods: {
        getTextIndex(e) {
            let target = e.target,
                start;
            if (target.selectionStart != 'undefined') {
                start = target.selectionStart;
            } else {
                start = '0'
            }
          //  start = index;
            let selectedText = this.getSelectionText()
            let end = selectedText.length + start
            console.log(`start:${start},end : ${end}, selected:${selectedText}`);

        },
         getSelectionText() {
            let selectedText = ''           
            if (window.getSelection) {       
                selectedText = window.getSelection().toString();        
            } else if (document.selection && document.selection.createRange) {            selectedText = document.selection.createRange().text;            }       
            return selectedText;       
        },
        handleChange(value) {

            let selectedText = this.getSelectionText()
            let end = selectedText.length + start

            if (start == end) {
                return 0;
            }

            // selected object
            var sel = { id: this.order, name: selectedText };

            for (let i = 0; i < this.results.length; i++) {
                if (this.results[i].entity === selectedText) {
                    this.$message.error('请勿重复选择');
                    return 0;
                }
            }

            this.results.push({
                id: this.order,
                sentence_id: this.sentence_id,
                entity: selectedText,
                pos: `${start},${end}`
            });
            this.order++;

            console.log(this.results)
        },
        // getSelectionText() {
        //    let selectedText = ''
        //    if (window.getSelection) {
        //       selectedText = window.getSelection().toString();
        //    } else if (document.selection && document.selection.createRange) {
        //       selectedText = document.selection.createRange().text;
        //  }
        //  return selectedText;
        // },

        handleClose(entity) {
            let result = this.results.filter(item => {
                return item['id'] !== entity.id
            })
            this.results = result
            console.log(this.results)
        },


        handleSelectType(value) {
            // 这里可以拿到选中的标
            console.log(value);

        },

        handleSave() {
            // let query={
            //   sentence_id:
            // }
        },
        init() {
            this.sentence = ''
            this.sentence_id = 0
            this.pos = '',
                this.results = [],
                this.order = 0
        },
        async listEntityTypes() {
            const resp = await this.$http.get('/Entity/ListType')
            if (resp.data.success) {
                this.entityTypes = resp.data.data;
            } else {
                console.log(resp.data);
                this.$message.error(resp.data.msg);
            }
        },
        async getSentence() {
            this.init();
            let post_data = { referer: "entity" };
            const resp = await this.$http.post('/Sentence/Get', post_data)
            if (resp.data.success) {
                this.sentence = resp.data.data[0].content;
                this.sentence_id = resp.data.data[0].id
            } else {
                console.log(resp.data);
                this.$message.error(resp.data.msg);
            }
        }
    }
}
</script>
<style scoped>
.box1 {
    width: 80%;
    height: 300px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin: 0 auto
}

.box2 {
    width: 80%;
    height: 100px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin: 10px auto
}

.el-tag {
    margin-right: 5px;
    cursor: pointer;
    margin-top: 20px
}

.tag {
    margin-top: 20px;
    margin-right: 2px
}

textarea {
    margin-top: 30px;
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    font-family: Arial, Helvetica, sans-serif;
    height: 85px;
    line-height: 30px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 80%;
    resize: none
}
</style>
