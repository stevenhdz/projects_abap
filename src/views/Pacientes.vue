<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="id" label="id" />
      <el-table-column prop="paciente" label="paciente" />
      <el-table-column prop="servicio" label="servicio" />
      <el-table-column prop="cantidad" label="cantidad" />
      <el-table-column prop="valor" label="valor" />
      <el-table-column prop="copago" label="copago" />
      <el-table-column prop="descuento" label="descuento" />
      <el-table-column prop="autorizacion" label="autorizacion" />
      <el-table-column fixed="right" label="Operations">
        <template #default>
          <router-link to="/PacienteEditar/2">
            <el-button type="danger">Gestionar</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "pacientes",
  setup() {
    return {
      tableData: [
        {
          id: "2",
          paciente: "Alex hernandez",
          servicio: "890202 consulta de primera vez medicina especializada",
          cantidad: "1",
          valor: "38.000",
          copago: "0",
          descuento: "0",
          autorizacion: "",
        },
        {
          id: "3",
          paciente: "Andres hernandez",
          servicio: "890202 consulta de primera vez medicina especializada",
          cantidad: "1",
          valor: "50.000",
          copago: "0",
          descuento: "0",
          autorizacion: "",
        },
      ],
    };
  },
};
</script>
<style lang="css"></style>
