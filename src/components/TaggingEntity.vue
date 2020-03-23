<template>
<div>
    <div class="box1">{{sentence}}
        <br>
        <el-tag class="tag" v-for=" (tag,index) in Lsentence" :key="tag" @click="handleSelect(tag,index)">
            {{tag}}
        </el-tag>
        <br>
        <el-tag v-for="(tag,index) in selected" :key="tag.name" type="success" closable @close="handleClose(tag,index)">
            {{tag.name}}
        </el-tag>

    </div>
    <div class="box2">
        <div style="margin-top: 20px">

            <!-- <el-checkbox-group v-model="asd" :max="1">
                <el-checkbox-button v-for=" tag in tags" :label="tag.name" :key="tag.name" @change="handleChange(tag)">
                    {{tag.name}}</el-checkbox-button>
            </el-checkbox-group> -->
     <el-radio-group v-model="asd">
      <el-radio-button  v-for=" tag in tags" :label="tag.name" :key="tag.name" @change="handleChange(tag)">{{tag.name}}</el-radio-button>
    
    </el-radio-group>

        </div>
    </div>
    <div class="btn">
        <el-button type="primary" round @click='handleSave'>save</el-button>
        <el-button type="primary" round>next</el-button>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            entityTypes: [],
            sentence: '',
            tags: [],
            Lsentence: [],
            sentence_id: 0,
            pos: '',
            type: 0,
            asd: ['circuiz'],
            selected: [],

        };

    },
    created() {
        this.getSentence();
        this.listEntityTypes();
    },
    methods: {
        handleClose(tag) {
            console.log(tag);
            let result = this.selected.filter(item => {
                return item['id'] !== tag.id
            })
            this.selected = result;
        },
        handleChange(tag) {
            // 这里可以拿到选中的标
            console.log(tag);

        },
        handleSelect(tag, index) {
            // 选到的单词
            let list = this.sentence.split(' ');
            let start = 0
            for (let i = 0; i < index; i++) {
                start += list[i].length
            }
            if (index !== 0) {
                start = start + index
            }
            let pos = {
                x: start,
                y: tag.length + start - 1
            }
            var name = tag.replace(/[, , .]/g, "")
            var obj = {
                id: index,
                name: name
            }
            let count = 0
            for (let i = 0; i < this.selected.length; i++) {
                console.log(this.selected[i].id);
                if (this.selected[i].id === index) {
                    this.$message.error('请勿重复选择');
                    count++
                }
            }
            if (count === 0) {
                this.selected.push(obj);
            }
        },
        handleSave() {
            // let query={
            //   sentence_id:
            // }
        },
        async listEntityTypes() {
            const resp = await this.$http.get('/Entity/ListType')
            if (resp.data.success) {
                this.tags = resp.data.data;
            } else {
                console.log(resp.data);
                this.$message.error(resp.data.msg);
            }
        },
        async getSentence() {
            let post_data = { referer: "entity" };
            const resp = await this.$http.post('/Sentence/Get', post_data)
            if (resp.data.success) {
                console.log(resp.data.data);

                this.sentence = resp.data.data[0].content;
                this.Lsentence = resp.data.data[0].content.split(' ')
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

</style>
