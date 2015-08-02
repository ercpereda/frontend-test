# Prueba de Ingenious Softworks para candidatos - Aplicación de frontend

Se utilizó AngularJS para la implementación de la aplicación.

## Instalación

```shell
git clone https://github.com/ercpereda/frontend-test.git
cd frontend
npm install
bower install
```

## Ejecución

```shell
npm start
```

Acceder con el navegador a la dirección http://localhost:9001/

## Notas

### El servicio que se encarga de la comunicación con el backend utiliza la función timeout para simular latencia en la red.

### La opción de compartir con twitter no estará disponible para los eventos finalizados.

### Los eventos se ordenaran según la próxima fecha no vencida.

### Los eventos finalizados se listarán últimos.

### Se modificó el backend para permitir cors request.
