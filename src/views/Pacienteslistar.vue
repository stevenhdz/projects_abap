<template>
  <div style="padding: 1px">
    <el-row style="background-color: white; padding: 8px">
      <el-col :span="12" style="text-align: left">
        <el-row style="background-color: white; padding: 8px">
          <h1 style="float: left">2 Alex hernandez</h1>
        </el-row>
        <el-row style="background-color: white; padding: 8px">
          <el-button type="success">
            <el-icon style="float: right"><CirclePlus /></el-icon>
            Glosa</el-button
          >
          <el-button type="danger">
            <el-icon style="float: right"><Edit /></el-icon> Edicion</el-button
          >
          <el-button type="info"
            ><el-icon style="float: right"><Upload /></el-icon>
            Archivo</el-button
          >
        </el-row>
        <el-row style="background-color: white; padding: 8px">
          <el-col :span="12" style="text-align: left">
            <h6>
              Numero:
              <p style="color: black">54</p>
            </h6>
            <h6>
              fecha factura:
              <p style="color: black">2020-08-08</p>
            </h6>
            <h6>
              convenio:
              <p style="color: black">EPS 403-2</p>
            </h6>
            <h6>
              observacion:
              <p style="color: black">Facturacion mayo</p>
            </h6>
          </el-col>
          <el-col :span="12" style="text-align: left">
            <h6>
              estado:
              <p style="color: black">Activo</p>
            </h6>
            <h6>
              forma de pago:
              <p style="color: black">Credito</p>
            </h6>
            <h6>
              valor:
              <p style="color: black">$900.000</p>
            </h6>
            <h6>
              copago:
              <p style="color: black">$0</p>
            </h6>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="12" style="text-align: left">
        <el-row style="background-color: white; padding: 8px">
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card style="width: 500px">
                <h4>Ingreso glosa 54</h4>
                <el-button type="danger" style="float: right; margin-top: -50px"
                  >Editar</el-button
                >
                <p><h6>Concepto:</h6> 337 soportes orden o formula medica</p>
                <p>
                  <h6>servicion:</h6> 890202 consulta de primera vez medicina
                  especializada
                </p>
                <p>
                  <h6>descripcion:</h6> se glosa una consulta 890202 por valor de 34.000
                  Pte Elizabeth Moreno...
                </p>
                <p><h6>valor glosa:</h6> $34.000</p>
                <p><h6>...</h6></p>
                <el-button type="success">Agregar Respuesta</el-button>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>Respuesta glosa 54</h4>
                <p><h6>Concepto:</h6> 999 respuestas a glosas o devoluciones subsanada (glosa no aceptada)</p>
                <p><h6>Descripcion:</h6> Se envia soporte autorizacion</p>
                <p><h6>Valor Acepta:</h6> $34.000</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { CirclePlus, Close, Upload, Edit } from "@element-plus/icons-vue";
export default {
  components: {
    CirclePlus,
    Close,
    Upload,
    Edit,
  },
  name: "Pacienteslistar",
  setup() {
    return {};
  },
};
</script>

<style lang="css"></style>
