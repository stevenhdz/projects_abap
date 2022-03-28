<template>
  <div style="padding: 35px">

    <el-row style="background-color: white; padding: 8px">
      <el-col :span="24">
        <router-link :to="{ name: 'PacienteCrear' }">
          <el-button style="float: left" type="success">Crear</el-button>
        </router-link>
      </el-col>
    </el-row>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="id" label="id" />
      <el-table-column prop="fecha" label="fecha" />
      <el-table-column prop="concepto" label="concepto" />
      <el-table-column prop="servicio" label="servicio" />
      <el-table-column prop="ValorGlosa" label="ValorGlosa" />
      <el-table-column prop="descripcion" label="descripcion" />
      <el-table-column fixed="right" label="Operations">
        <template #default>
          <router-link to="/PacienteEditar/2">
            <el-button type="danger">Editar</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Paciente_listar",
  setup() {
    return {
      tableData: [
        {
          id: "2",
          fecha: "2022-08-08",
          concepto: "Option1",
          servicio: "Option1",
          descripcion: "prueba.com",
          ValorGlosa: "90000",
        },
      ],
    };
  },
};
</script>

<style lang="css"></style>
