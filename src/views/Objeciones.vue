<template>
  <div style="padding: 1px">
    <el-row style="background-color: white; padding: 8px">
      <el-col :span="24" style="text-align: left">
        <el-row style="background-color: white; padding: 8px">
          <el-button type="success">
            <el-icon style="float: right"><Edit /></el-icon> Guardar</el-button
          >
        </el-row>
        <el-row style="background-color: white; padding: 8px">
          <h1>Datos de cabecera</h1>
        </el-row>
        <el-row style="background-color: white; padding: 8px">
          <el-col :span="6" style="text-align: left">
            <h6>
              CeSanitario:
              <p style="color: black">
                <el-input
                  v-model="CeSanitario"
                  style="width: 250px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
            <h6>
              Episodio:
              <p style="color: black">
                <el-input
                  v-model="Episodio"
                  style="width: 250px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
            <h6>
              Responsable de pago:
              <p style="color: black">
                <el-input
                  v-model="Responsable_de_pago"
                  style="width: 250px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
            <h6>
              fecha de factura:
              <p style="color: black">
                <el-input
                  v-model="fecha_de_factura"
                  style="width: 250px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
            <h6>
              factura:
              <p style="color: black">
                <el-input
                  v-model="factura"
                  style="width: 250px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
          </el-col>
          <el-col :span="6" style="text-align: left">
            <h6>
              referencia:
              <p style="color: black">
                <el-input
                  v-model="referencia"
                  style="width: 250px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
            <h6>
              deducible:
              <p style="color: black">
                <el-input
                  v-model="deducible"
                  style="width: 250px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
            <h6>
              tipo de documento:
              <p style="color: blue">
                <el-input
                  v-model="tipo_de_documento"
                  style="width: 40px"
                  placeholder="Please input"
                  disabled
                />
                REGLOSA
              </p>
            </h6>
            <h6>
              creado por:
              <p style="color: black">
                <el-input
                  v-model="creado_por"
                  style="width: 250px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
            <h6>
              valor factura:
              <p style="color: black">
                <el-input
                  v-model="valor_factura"
                  style="width: 250px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
          </el-col>
          <el-col :span="6" style="text-align: left">
            <h6>
              valor deducible:
              <p style="color: black">
                <el-input
                  v-model="valor_deducible"
                  style="width: 250px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
            <h6>
              fecha recepcion:
              <p style="color: black">
                <el-input
                  v-model="fecha_recepcion"
                  style="width: 250px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
            <h6>
              numero paquete:
              <p style="color: black">
                <el-input
                  v-model="numero_paquete"
                  style="width: 250px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
            <h6>
              numero ruta:
              <p style="color: black">
                <el-input
                  v-model="numero_ruta"
                  style="width: 250px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
            <h6>
              numero radicado:
              <p style="color: black">
                <el-input
                  v-model="numero_radicado"
                  style="width: 250px"
                  placeholder=""
                />
              </p>
            </h6>
          </el-col>
          <el-col :span="6" style="text-align: left">
            <h6>
              codigo de objecion c:
              <p style="color: black">
                <el-input
                  v-model="codigo_de_objecion_c"
                  style="width: 50px"
                  placeholder="Please input"
                  disabled
                />

                <el-input
                  v-model="input"
                  style="width: 200px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
            <h6>
              observacion:
              <p style="color: black">
                <el-input
                  v-model="observacion"
                  style="width: 250px"
                  :rows="2"
                  type="textarea"
                  placeholder=""
                />
              </p>
            </h6>
            <h6>
              numero documento contable:
              <p style="color: black">
                <el-input
                  v-model="numero_documento_contable"
                  style="width: 250px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
            <h6>
              total registros:
              <p style="color: black">
                <el-input
                  v-model="total_registros"
                  style="width: 250px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="18">
        <el-row style="background-color: white; padding: 8px">
          <h1>Datos del paciente</h1>
        </el-row>
        <el-row style="background-color: white; padding: 8px">
          <el-col :span="6" style="text-align: left">
            <h6>
              Nombres y apellidos:
              <p style="color: black">
                <el-input
                  v-model="nombres"
                  style="width: 150px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
          </el-col>
          <el-col :span="4" style="text-align: left">
            <h6>
              Tipo documento:
              <p style="color: black">
                <el-input
                  v-model="tipoD"
                  style="width: 60px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
          </el-col>
          <el-col :span="6" style="text-align: left">
            <h6>
              Numero documento:
              <p style="color: black">
                <el-input
                  v-model="numD"
                  style="width: 150px"
                  placeholder="Please input"
                  disabled
                />
              </p>
            </h6>
          </el-col>
        </el-row>
        <el-row style="background-color: white; width: 100%">
          <el-table :data="tableData" style="width: 250000" height="250">
            <el-table-column fixed prop="Trat" label="Trat" width="150">
              <el-button style="background-color: #67c23a"></el-button>
            </el-table-column>
            <el-table-column prop="Prestacion" label="Prestacion" width="150" />
            <el-table-column prop="Ctd" label="Ctd" width="150" />
            <el-table-column prop="Prest_CUPS" label="Prest_CUPS" width="150" />
            <el-table-column prop="UO_gestora" label="UO_gestora" width="150" />
            <el-table-column prop="Tp_prest" label="Tp_prest" width="150" />
            <el-table-column
              prop="procedimiento"
              label="procedimiento"
              width="150"
            />
            <el-table-column prop="valorNeto" label="valorNeto" width="150" />
            <el-table-column
              prop="valorAjustado"
              label="valorAjustado"
              width="150"
            />
            <el-table-column prop="Obj" label="Obj" width="150" />
            <el-table-column
              prop="valorObjectado"
              label="valorObjectado"
              width="150"
            />
            <el-table-column prop="Cod" label="Cod" width="150" />
            <el-table-column
              prop="Descripcion1"
              label="Descripcion1"
              width="150"
            />
            <el-table-column prop="Cod2" label="Cod2" width="150" />
            <el-table-column
              prop="Descripcion2"
              label="Descripcion2"
              width="150"
            />
            <el-table-column
              prop="ObservacionPosicion"
              label="ObservacionPosicion"
              width="150"
            />
            <el-table-column fixed="right" label="Operations" width="150">
              <template #default>
                <router-link to="/PacienteEditar/2">
                  <el-button type="danger">Gestionar</el-button>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref } from "vue";
import { CirclePlus, Close, Upload, Edit } from "@element-plus/icons-vue";
export default {
  components: {
    CirclePlus,
    Close,
    Upload,
    Edit,
  },
  name: "Objeciones",
  setup() {
    return {
      nombres: ref("Alex hernandez"),
      tipoD: ref("CC"),
      numD: ref("98976"),
      input: ref("ATENCION INTEGRAL (PAQUETE Y/O ACTIVIDAD)"),
      CeSanitario: ref("HSVF"),
      Episodio: ref("0000002196"),
      Responsable_de_pago: ref("20000189"),
      fecha_de_factura: ref("17-12-2014"),
      factura: ref("2000000907"),
      referencia: ref("02120500"),
      deducible: ref("CUOTA DE RECUPERACION"),
      tipo_de_documento: ref("07"),
      creado_por: ref("JTOBON"),
      valor_factura: ref("1.729.806"),
      valor_deducible: ref("224.204"),
      fecha_recepcion: ref("24-03-2015"),
      numero_paquete: ref("02120500"),
      numero_ruta: ref("12"),
      numero_radicado: ref(""),
      codigo_de_objecion_c: ref("109"),
      observacion: ref(""),
      numero_documento_contable: ref(""),
      total_registros: ref("11"),
      tableData: [
        {
          Trat: "",
          Prestacion: "CR20000189",
          Ctd: "1",
          Prest_CUPS: "CR20000189",
          UO_gestora: "TLABOCLI",
          Tp_prest: "02-LABO",
          procedimiento: "",
          valorNeto: "224.204",
          valorAjustado: "37.173-",
          Obj: "",
          valorObjectado: "",
          Cod: "",
          Descripcion1: "",
          Cod2: "",
          Descripcion2: "",
          ObservacionPosicion: "",
        },
        {
          Trat: "",
          Prestacion: "19647",
          Ctd: "1",
          Prest_CUPS: "902216",
          UO_gestora: "TLABOCLI",
          Tp_prest: "02-LABO",
          procedimiento: "",
          valorNeto: "16.400",
          valorAjustado: "100",
          Obj: "",
          valorObjectado: "",
          Cod: "",
          Descripcion1: "",
          Cod2: "",
          Descripcion2: "",
          ObservacionPosicion: "",
        },
        {
          Trat: "",
          Prestacion: "19517",
          Ctd: "1",
          Prest_CUPS: "902213",
          UO_gestora: "TLABOCLI",
          Tp_prest: "CUOTA",
          procedimiento: "",
          valorNeto: "6400",
          valorAjustado: "100",
          Obj: "",
          valorObjectado: "",
          Cod: "",
          Descripcion1: "",
          Cod2: "",
          Descripcion2: "",
          ObservacionPosicion: "",
        },
      ],
    };
  },
};
</script>

<style lang="css">
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
