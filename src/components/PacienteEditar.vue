<template>
  <div class="pacienteEditar">
    <el-form label-position="top" label-width="100px" :model="formLabelAlign">
      <el-row>
        <el-col :span="24">
          <el-form-item label="Fecha">
            <div class="demo-date-picker">
              <div class="block">
                <el-date-picker
                  style="width: 100%"
                  v-model="value2"
                  type="date"
                  placeholder="Pick a day"
                />
              </div>
            </div>
            <el-button type="danger" style="float: right" plain
              >Edicion de glosa {{ $route.params.id }}</el-button
            >
            <el-button type="danger" style="float: right">Eliminar</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="Concepto">
            <el-select
              v-model="value"
              style="width: 100%"
              clearable
              placeholder="Select"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="Servicio">
            <el-select
              v-model="value3"
              style="width: 100%"
              clearable
              placeholder="Select"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="Descripcion">
            <el-input
              v-model="textarea2"
              :autosize="{ minRows: 2, maxRows: 15 }"
              type="textarea"
              placeholder="Please input"
            />
          </el-form-item>
          <el-icon style="float: right"><Microphone /></el-icon>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="Valor Glosa">
            <el-input-number v-model="input" />

            <el-select
              v-model="value5"
              style="width: 10%"
              clearable
              placeholder="Select"
            >
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider> </el-divider>
      <el-row justify="end">
        <el-col :span="8">
          <el-button type="primary" @click="onSubmit">Guardar</el-button>
          <el-button>Cancelar</el-button></el-col
        >
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { Microphone } from "@element-plus/icons-vue";
import { ref } from "vue";
export default {
  components: {
    Microphone,
  },
  name: "PacienteEditar",
  setup() {
    return {
      value2: ref("2022-08-08"),
      input: ref(90000),
      textarea1: ref("Option1"),
      textarea2: ref("prueba.com"),

      value: ref("Option1"),
      value5: ref("%"),
      value3: ref("Option1"),
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      options2: [
        {
          value: "$",
          label: "$",
        },
        {
          value: "%",
          label: "%",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
