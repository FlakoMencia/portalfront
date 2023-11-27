# Mario Mencia - Colsubsidio TEST
# PortalFront

* Stack principal:
  * Angular 16.0.0
  * Bootstrap 5.3.2
  * SweetAlert2 11.10.1
  * ngx-spinner 16.0.2
  * Font-Awesome 6.4.2

Bienvenidos a la resolución de

"PRUEBA TÉCNICA DESARROLLADOR FULLSTACK" (Parte : FrontEnd )


## Pantalla Principal
![Texto alternativo](https://drive.google.com/uc?export=view&id=1MFMyF-NOIp9rCqal9JBj6uJKyVC6dUDL "Captura Pantalla Principal")

En pantalla principal podemos elegir en registrar usuario o entrar con un usuario ya existente. 
También se cuenta con un botón que comprueba la comunicación con el Backend.


## Listado de Usuarios
![Texto alternativo](https://drive.google.com/uc?export=view&id=1KZh9X5Zlzv3aW-yQfEU5_ZmvdmIOdHc1 "Captura Pantalla Listado Usuarios")

Una vez registrados o Autenticados, se obtiene el listado de Usuarios registrados
atraves del correspondiente endpoint ("/api/usuarios/list") y Autorización por medio de un Token válido 
el cual fue almacenado en cualquiera de los pasos anteriores en el local storage


*Toda comunicación con API es del tipo ["Content-Type"] = "application/json"

**Boton salir de sesión o recargar la página elimina el token de local storage. 
