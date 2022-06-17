import React from 'react';
import {Alert, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-web';

export default class Asignatura extends React.PureComponent{
    constructor(props){
      super(props)
      this.state = {
        TextInput_id:'',
        TextInput_nombre: '',
        TextInput_creditos: '',
        TextInput_tipo: '',
        TextInput_curso: '',
        TextInput_clave:'',
        TextInput_cuatrimestre:'',
        TextInput_id_profesor:'',
        TextInput_id_grado:'',
      }  
    }  
    //Ahora creamos las funciones de esta clase
    InsertarAsignatura = () => {
      //Ahora vamos a consumir la API: APIMatriculasGrupoSabado
      fetch('https://localhost:44351/Api/Asignatura', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  
            asignatura_id: this.state.TextInput_id,
            asignatura_nombre: this.state.TextInput_nombre,
            asignatura_creditos: this.state.TextInput_credito,
            asignatura_tipo: this.state.TextInput_tipo,
            asignatura_curso: this.state.TextInput_curso,
            asignatura_cuatrimestre: this.state.TextInput_cuatrimestre,
            asignatura_id_profesor: this.state.TextInput_id_profesor,
            asignatura_id_grado: this.state.TextInput_id_grado
          })
      }
      ).then((response) => response.json())
      .then((responseJson) => {
          alert(responseJson);
  
        }).catch((error) => {
          console.error(error);
        });
    }
  
    ActualizarAsignatura = () => {
      //Ahora vamos a codificar la función actualizar para
      //consumir la API
      fetch('https://localhost:44351/Api/Asignatura', {
          method: 'PUT',
          headers:
          {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify(
          {
            asignatura_id: this.state.TextInput_id,
            asignatura_nombre: this.state.TextInput_nombre,
            asignatura_creditos: this.state.TextInput_credito,
            asignatura_tipo: this.state.TextInput_tipo,
            asignatura_curso: this.state.TextInput_curso,
            asignatura_cuatrimestre: this.state.TextInput_cuatrimestre,
            asignatura_id_profesor: this.state.TextInput_id_profesor,
            asignatura_id_grado: this.state.TextInput_id_grado           
          })
        }
      ).then((response) => response.json())
      .then((responseJson) => {
          alert('El registro ha sido actualizado');}
      ).catch((error) => {
        console.error(error);
      })
    }
  
    BorrarAsignatura = () => {
     //Ahora vamos a codificar la función borrar para
      //consumir la API
      fetch('https://localhost:44351/Api/Asignatura', {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            asignatura_id: this.state.TextInput_id         
          })
        }
      ).then((response) => response.json())
      .then((responseJson) => {
          alert('El registro ha sido borrado');
        }
      ).catch((error) => {
        console.error(error);
      })
    }
  
    ListarTodasLasAsignaturas = () => {
  //Ahora vamos a codificar la función ListarxId para
      //consumir la API
      fetch('https://localhost:44351/Api/Asignatura', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            asignatura_id: this.state.TextInput_id,
            asignatura_nombre: this.state.TextInput_nombre,
            asignatura_creditos: this.state.TextInput_credito,
            asignatura_tipo: this.state.TextInput_tipo,
            asignatura_curso: this.state.TextInput_curso,
            asignatura_cuatrimestre: this.state.TextInput_cuatrimestre,
            asignatura_id_profesor: this.state.TextInput_id_profesor,
            asignatura_id_grado: this.state.TextInput_id_grado        
          })
        }
      ).then((response) => response.json())
      .then((responseJson) => {
        this.state({
            TextInput_id: responseJson[0]['id'],
            TextInput_nombre: responseJson[0]['nombre'],
            TextInput_creditos: responseJson[0]['creditos'],
            TextInput_tipo: responseJson[0]['tipo'],
            TextInput_curso: responseJson[0]['curso'],
            TextInput_cuatrimestre: responseJson[0]['cuatrimestre'],
            TextInput_id_profesor: responseJson[0]['id_profesor'],
            TextInput_id_grado: responseJson[0]['id_grado']
          })
      })
    }
  
    ListarAsignaturaxId = () => {
      //Ahora vamos a codificar la función ListarxId para
      //consumir la API
      fetch('https://localhost:44351/Api/Asignatura', {
          method: 'GET',
          headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            asignatura_id: this.state.TextInput_id,
            asignatura_nombre: this.state.TextInput_nombre,
            asignatura_creditos: this.state.TextInput_credito,
            asignatura_tipo: this.state.TextInput_tipo,
            asignatura_curso: this.state.TextInput_curso,
            asignatura_cuatrimestre: this.state.TextInput_cuatrimestre,
            asignatura_id_profesor: this.state.TextInput_id_profesor,
            asignatura_id_grado: this.state.TextInput_id_grado        
          })
        }
      ).then((response) => response.json())
      .then((responseJson) => {
        this.state({
            TextInput_id: responseJson[0]['id'],
            TextInput_nombre: responseJson[0]['nombre'],
            TextInput_creditos: responseJson[0]['creditos'],
            TextInput_tipo: responseJson[0]['tipo'],
            TextInput_curso: responseJson[0]['curso'],
            TextInput_cuatrimestre: responseJson[0]['cuatrimestre'],
            TextInput_id_profesor: responseJson[0]['id_profesor'],
            TextInput_id_grado: responseJson[0]['id_grado'] 
          })
      })
    }

    render(){
        return(
            <View>
                <Text style = {{fontSize: 20, textAlign: 'center', marginBottom: 7, marginTop: '2%'}}>Registro de Asignatura</Text>
                <View style={ {flexWrap:'wrap',flexDirection:'row',backgroundColor:"white",marginTop:20}}>
                    
                </View>
            </View>
        )
    }
}