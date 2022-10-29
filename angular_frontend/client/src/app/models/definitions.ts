export const definitions = {
  proveedor: {
    item_id: 'text',
    categoria: 'text',
    nombre: 'text',
    RUC: 'text',
    descripcion: 'text',
    contacto_phone: 'phone',
    contacto_mail: 'email'
  },
  poliza: {
    item_id: 'text',
    nombre: 'text',
    description: 'text',
    price: 'money',
    provider: 'provider',
    document: 'file',
  },
  operador: {
    item_id: 'text',
    document_id: 'text',
    lastname: 'text',
    firstname: 'text',
    driver_document_date: 'date',
    driver_document: 'picture',
  },
  mantenimiento: {
    item_id: 'text',
    nombre: 'text',
    status: 'estados_mantenimiento',
    vehicle: 'flota',
    provider: 'provider',
    service_provided: 'service',
    date: 'date',
    price: 'money',
    km: 'number',
    document: 'file'
  },
  vehiculo: {
    item_id: 'text',
    nombre: 'text',
    plate: 'text',
    brand: 'text',
    model: 'text',
    color: 'text',
    operator: 'operator',
    picture_front: 'picture',
    picture_side: 'picture',
    picture_back: 'picture'
  },
  servicio: {
    item_id: 'text',
    nombre: 'text',
    description: 'text'
  }
}

export const transalations = {
  proveedor: {
    categoria: 'Categoría',
    nombre: 'Nombre Proveedor',
    RUC: 'Registro Único de Contribuyente',
    descripcion: 'Descripción',
    contacto_phone: 'Número Telefónico',
    contacto_mail: 'Correo Electrónico'
  },
  poliza: {
    nombre: 'Nombre',
    description: 'Descripción de Cobertura',
    provider: 'Proveedor',
    price: 'Costo',
    document: 'Documento Adjunto'
  },
  operador: {
    document_id: 'Documento de Identidad',
    lastname: 'Apellidos',
    firstname: 'Nombres',
    driver_document_date: 'Fecha de Expiración de Licencia',
    driver_document: 'Licencia'
  },
  mantenimiento: {
    status: 'Estado',
    nombre: 'Nombre',
    vehicle: 'Vehículo Afectado',
    plate: 'Placa',
    provider: 'Proveedor',
    service_provided: 'Servicio Provisto',
    date: 'Fecha',
    price: 'Costo',
    km: 'Kilometraje',
    document: 'Documento Adjunto'
  },
  vehiculo: {
    nombre: 'Nombre',
    plate: 'Placa',
    brand: 'Marca',
    model: 'Modelo',
    color: 'Color',
    operator: 'Operador',
    picture_front: 'Fotografía Frontal',
    picture_side: 'Fotografía Lateral',
    picture_back: 'Fotografía Posterior'
  },
  servicio: {
    nombre: 'Nombre',
    description: 'Descripción'
  }
}

export const toStringKeys = {
  vehiculo: ['plate','nombre','brand', 'model'],
  proveedor: ['RUC','categoria','nombre'],
  operador: ['document_id','firstname','lastname'],
  servicio: ['nombre']
}

export const catalogos = {
  estados_mantenimiento: ['Ejecutado','En Curso','No Ejecutado']
}
