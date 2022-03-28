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
              >Edicion respuesta de glosa {{ $route.params.id }}</el-button
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
          <el-form-item label="Valor Acepta">
            <el-input-number v-model="input" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Valor Ratifica">
            <el-input-number v-model="input" />
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
export default {
  name: "AgregarRespuestaGlosa",
  setup() {},
};
</script>

<style lang="css"></style>
