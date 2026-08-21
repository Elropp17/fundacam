'use client'; 

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [seleccionada, setSeleccionada] = useState<any>(null);
  const [historiaActual, setHistoriaActual] = useState(0);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [diaSeleccionado, setDiaSeleccionado] = useState('Lunes');
  const [mostrarHistoria, setMostrarHistoria] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const historias = [
    {
      id: 1,
      imagen: '/imagen1.jpeg', 
      titulo: 'La Salud de todos nos importa',
      mensaje: 'Cada paso que damos es una huella de amor. Nos acercamos a quienes más lo necesitan para brindar atención médica, escucha activa y una mano amiga cuando las fuerzas flaquean.'
    },
    {
      id: 2,
      imagen: '/imagen3.jpeg',
      titulo: 'Bienestar para toda la familia',
      mensaje: 'Creemos en el cuidado integral. En nuestras jornadas médicas y de asistencia, nos aseguramos de proteger la salud de todos, ofreciendo espacios de atención cálida y humana.'
    },
    {
      id: 3,
      imagen: '/imagen2.jpeg',
      titulo: 'Más que medicina, somos familia',
      mensaje: 'Detrás de cada consulta hay una historia de superación. Nuestro mayor logro no es solo aliviar el dolor físico, sino devolver la sonrisa y la esperanza a quienes caminan junto a nosotros.'
    }
  ];

  const categorias = [
    {
      id: 'critica',
      titulo: 'ÁREA CRÍTICA Y CRÓNICA',
      headerBg: 'bg-[#c70e5d]', 
      circleBg: 'bg-[#faeaf1]', 
      circleBorder: 'border-[#f1c7d8]',
      items: [
        { id: 'c1', nombre: 'Neumonólogo', icon: '🫁', doctor: 'Dra. María Fernández', costo: '$30', descripcion: 'Respirar con tranquilidad es el puente hacia una vida plena. En la Fundación, no solo tratamos tus pulmones; escuchamos tus inquietudes y te brindamos un acompañamiento cálido y humano.' },
        { id: 'c2', nombre: 'Cardiólogo', icon: '❤️', doctor: 'Dr. Carlos Mendoza', costo: '$35', descripcion: 'Tu corazón no es solo un órgano, es el motor de tus sueños y emociones. Nuestro equipo de cardiología te recibe con los brazos abiertos para cuidar cada uno de tus latidos.' },
        { id: 'c3', nombre: 'Gastroenterólogo', icon: '🩺', doctor: 'Dra. Elena Rojas', costo: '$30', descripcion: 'Entendemos que el equilibrio de tu cuerpo comienza desde adentro. Con profunda sensibilidad, te guiamos hacia una salud digestiva óptima, aliviando tus molestias con paciencia.' },
        { id: 'c4', nombre: 'Endocrino', icon: '🦋', doctor: 'Dr. Luis Silva', costo: '$30', descripcion: 'El balance de tu cuerpo es fundamental para sentirte en armonía. Te acompañamos con cariño y comprensión para regular tu metabolismo y cuidar de ti integralmente.' },
        { id: 'c5', nombre: 'Internista', icon: '⚕️', doctor: 'Dr. Héctor Salas', costo: '$25', descripcion: 'Tu salud integral es un rompecabezas que evaluamos con detalle. Como especialistas en medicina interna, conectamos los síntomas para llegar a la raíz de tu malestar.' },
        { id: 'c6', nombre: 'Oncólogo', icon: '🥼', doctor: 'Dr. Jose Gregorio Hernandez', costo: '$10', img: '/onco.jpg', descripcion: 'Enfrentar un diagnóstico difícil requiere de un equipo médico compasivo y altamente capacitado. Te acompañamos en cada etapa de tu tratamiento oncológico con empatía.' },
      ]
    },
    {
      id: 'general',
      titulo: 'MEDICINA GENERAL Y QUIRÚRGICA',
      headerBg: 'bg-[#3b9b9b]', 
      circleBg: 'bg-[#ebf3f7]',
      circleBorder: 'border-[#c9dfe8]',
      items: [
        { id: 'g1', nombre: 'Pediatra', icon: '👶', doctor: 'Dra. Lorena Ramos', costo: '$25', img: '/pediatra.jpg', descripcion: 'Sabemos que tus hijos son tu mayor tesoro. Por eso, hemos creado un ambiente lleno de amor, juegos y sonrisas donde el cuidado médico se transforma en una experiencia positiva.' },
        { id: 'g2', nombre: 'Oftalmólogo', icon: '👓', doctor: 'Dr. Roberto Gómez', costo: '$30', descripcion: 'Queremos que sigas viendo la belleza del mundo con absoluta claridad. Con total delicadeza, cuidamos tu visión para que no te pierdas ni un solo detalle de los momentos importantes.' },
        { id: 'g3', nombre: 'Otorrino', icon: '👂', doctor: 'Dra. Patricia León', costo: '$30', descripcion: 'Tus sentidos te conectan con las personas que amas y el mundo que te rodea. Te brindamos un cuidado excepcional y minucioso para tu audición y tu voz.' },
        { id: 'g4', nombre: 'Urólogo', icon: '💧', doctor: 'Dr. Javier Pineda', costo: '$35', img: '/javier.jpg', descripcion: 'Abordamos tu salud íntima con el máximo respeto, absoluta confidencialidad y una gran empatía. Sabemos que dar el paso puede generar dudas o temores, por eso te ofrecemos un espacio seguro.' },
        { id: 'g5', nombre: 'Ginecología', icon: '🌸', doctor: 'Dr. Andrés González', costo: '$9', img: '/andres.jpg', descripcion: 'Ser mujer es un viaje hermoso, y no tienes que recorrerlo sola. Te brindamos un espacio íntimo, respetuoso y lleno de solidaridad donde tu salud integral es lo primero.' }, 
      ]
    },
    {
      id: 'neuro',
      titulo: 'NEUROLOGÍA Y APOYO DIAGNÓSTICO',
      headerBg: 'bg-[#4b9ba5]', 
      circleBg: 'bg-[#ebf3f7]',
      circleBorder: 'border-[#c9dfe8]',
      items: [
        { id: 'n1', nombre: 'Neurólogo', icon: '🧠', doctor: 'Dr. Andrés Torres', costo: '$40', descripcion: 'Tu mente y tu sistema nervioso son el centro de todo lo que eres. Comprendemos la complejidad de tus padecimientos y te ofrecemos un apoyo médico firme, pero profundamente compasivo.' },
        { id: 'n2', nombre: 'Neuropediatra', icon: '🧒', doctor: 'Dra. Carmen Vivas', costo: '$45', descripcion: 'Entendemos profundamente la preocupación de los padres cuando se trata del desarrollo de sus pequeños. Con infinita ternura, paciencia y mucha vocación, evaluamos y guiamos a tus hijos.' },
        { id: 'n3', nombre: 'Traumatólogo', icon: '🦴', doctor: 'Dr. Ender Pacheco', costo: '$8', img: '/trauma.jpg', descripcion: 'Cada paso que das es importante para nosotros. Si el dolor o una lesión han detenido tu marcha, nuestro equipo humano te ayudará a levantarte con fuerza.' },
        { id: 'n4', nombre: 'Ecografista', icon: '📟', doctor: 'Dr. Marvin Santana', costo: '$9', img: '/eco.jpg', descripcion: 'A través de nuestras imágenes, miramos más allá de lo evidente para cuidar tu salud con precisión milimétrica. Te ofrecemos un trato sumamente cálido durante cada estudio.' },
        { id: 'n5', nombre: 'Fisioterapeuta', icon: '👐', doctor: 'Lcdo. Elsa Perez', costo: '$4', descripcion: 'El movimiento es vida, y queremos ayudarte a recuperarlo. Con paciencia y terapias personalizadas, aliviamos tu dolor y rehabilitamos tus lesiones.' },
        { id: 'n6', nombre: 'Psicólogo', icon: '🧩', doctor: 'Lcda. Alexandra Perez', costo: '$8', img: '/psico.jpg', descripcion: 'Cuidar de tu mente es tan importante como cuidar de tu cuerpo. Te ofrecemos un espacio seguro, confidencial y libre de juicios donde podrás sanar y gestionar tus emociones.' },
      ]
    }
  ];

  const horarios = [
    { dia: 'Lunes', consultas: ['Ginecología-Obstetricia', 'Otorrinolaringología', 'Laboratorios', 'Medicina general', 'Pediatría'] },
    { dia: 'Martes', consultas: ['Medicina general', 'Pediatría', 'Ecosonogramas', 'Ginecología-Obstetricia'] },
    { dia: 'Miércoles', consultas: ['Laboratorios', 'Ecosonogramas', 'Medicina Interna', 'Psicología'] },
    { dia: 'Jueves', consultas: ['Medicina general', 'Traumatología', 'Psicología', 'Medicina Interna', 'Fisioterapeuta'] },
    { dia: 'Viernes', consultas: ['Laboratorios', 'Medicina general', 'Ecosonogramas', 'Fisioterapeuta'] }
  ];

  const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

  const agendarCitaWhatsApp = () => {
    if (!seleccionada) return;
    const numeroTelefono = "584120000000"; 
    const mensaje = `Hola Fundación Caminemos Juntos. Me gustaría agendar una cita médica. 💙\n\n*Especialidad:* ${seleccionada.nombre}\n*Especialista:* ${seleccionada.doctor}\n*Costo Solidario:* ${seleccionada.costo}\n\nPor favor, indíquenme los horarios disponibles. ¡Gracias!`;
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans selection:bg-blue-200 relative flex flex-col">
      
      {/* 1. HEADER ANIMADO */}
      <motion.header 
        className="sticky top-0 z-40 w-full flex flex-col justify-between overflow-hidden bg-[#050505] shadow-2xl"
        initial={false}
        animate={{ height: isScrolled ? '90px' : '40vh', minHeight: isScrolled ? '90px' : '350px' }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="absolute inset-0">
          <img src="/banner.jpeg" alt="Atención médica comunitaria" className="w-full h-full object-cover object-center opacity-60" />
          <div className={`absolute inset-0 bg-gradient-to-b transition-colors duration-500 ${isScrolled ? 'from-black/80 to-black/90' : 'from-black/40 via-black/20 to-black/60'}`}></div>
        </div>
        
        <motion.div layout className="relative z-20 flex justify-center w-full" animate={{ paddingTop: isScrolled ? '8px' : '24px', paddingBottom: isScrolled ? '0px' : '8px' }}>
          <motion.img layout src="/logo.png" alt="Logo Fundación Caminemos Juntos" className="w-auto object-contain drop-shadow-2xl" animate={{ height: isScrolled ? '40px' : '128px' }} transition={{ duration: 0.4 }} />
        </motion.div>

        <AnimatePresence>
          {!isScrolled && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto gap-2 flex-grow overflow-hidden">
              <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] tracking-tight">Salud al alcance de todos</h2>
              <p className="text-base md:text-xl text-gray-100 font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Atención médica solidaria y de calidad para el desarrollo integral de las familias.</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.nav layout className="relative z-20 flex flex-wrap justify-center gap-4 md:gap-10 font-bold text-xs md:text-sm text-gray-100 tracking-wider uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] px-4" animate={{ paddingBottom: isScrolled ? '12px' : '32px', paddingTop: isScrolled ? '8px' : '0px' }}>
          <button onClick={() => setMostrarHistoria(true)} className="hover:text-pink-400 transition-colors uppercase cursor-pointer">Qué hacemos</button>
          <a href="#" className="hover:text-blue-300 transition-colors">Especialidades</a>
          <a href="#" className="hover:text-green-400 transition-colors">Novedades</a>
          <a href="#" className="hover:text-blue-300 transition-colors">Contacto</a>
        </motion.nav>
      </motion.header>

      {/* 2. SECCIÓN DE NOTICIAS (AHORA SÍ, ÚNICA) */}
      <section className="max-w-7xl mx-auto w-full px-6 pt-16 pb-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] shadow-2xl overflow-hidden relative flex flex-col md:flex-row">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-400 rounded-full blur-3xl opacity-20"></div>

          <div className="p-8 md:p-12 md:w-3/5 text-white z-10 flex flex-col justify-center">
            <span className="bg-pink-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full inline-block w-max mb-4 shadow-sm">Noticias y Novedades</span>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight drop-shadow-md">Llevando salud a cada rincón de Barquisimeto</h3>
            <p className="text-blue-50 text-base md:text-lg mb-8 leading-relaxed">Nuestras jornadas médicas comunitarias han impactado a cientos de familias, acercando especialistas, medicinas y mucho amor a quienes más lo necesitan. ¡Seguimos caminando juntos por la salud de nuestra gente!</p>
            
            <div className="flex gap-4">
              <div className="bg-white/10 rounded-2xl p-4 border border-white/20 backdrop-blur-sm flex-1 text-center shadow-lg">
                <span className="block text-3xl font-black text-pink-300 mb-1">+500</span>
                <span className="text-xs text-blue-100 uppercase tracking-wider font-semibold">Pacientes Atendidos</span>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 border border-white/20 backdrop-blur-sm flex-1 text-center shadow-lg">
                <span className="block text-3xl font-black text-teal-300 mb-1">+15</span>
                <span className="text-xs text-blue-100 uppercase tracking-wider font-semibold">Comunidades Visitadas</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 md:w-2/5 z-10 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-20 h-20 bg-pink-50 rounded-bl-full flex items-center justify-center">
              <span className="text-3xl animate-bounce pt-2 pl-2">📢</span>
            </div>
            
            <h4 className="text-2xl font-extrabold text-gray-800 mb-2">¡Nuestra Próxima Jornada!</h4>
            <p className="text-gray-500 text-sm mb-8">Mantente atento a nuestras redes sociales para confirmar los especialistas que nos acompañarán.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl shadow-sm transition-colors">📅</div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Fecha estimada</p>
                  <p className="text-xl font-bold text-gray-700">Septiembre 2026</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-pink-50 group-hover:bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-2xl shadow-sm transition-colors">📍</div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Ubicación</p>
                  <p className="text-xl font-bold text-gray-700">Por confirmar</p>
                </div>
              </div>
            </div>

            <button onClick={() => window.open('https://instagram.com/tu_usuario', '_blank')} className="mt-8 w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Seguir en Instagram
            </button>
          </div>
        </motion.div>
      </section>

      {/* 3. MODAL: PÁGINA "QUÉ HACEMOS" */}
      <AnimatePresence>
        {mostrarHistoria && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4 md:p-8 backdrop-blur-md overflow-y-auto" onClick={() => setMostrarHistoria(false)}>
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 20, opacity: 0 }} transition={{ type: "spring", bounce: 0.3, duration: 0.5 }} className="bg-white rounded-[2rem] shadow-2xl max-w-5xl w-full p-8 md:p-14 relative overflow-hidden flex flex-col my-auto cursor-default" onClick={(e) => e.stopPropagation()}>
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-pink-400 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

              <button onClick={() => setMostrarHistoria(false)} className="absolute top-6 right-6 text-gray-400 hover:text-red-500 text-4xl font-bold transition-colors z-20 bg-gray-50 hover:bg-red-50 rounded-full w-12 h-12 flex items-center justify-center">&times;</button>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4 tracking-tight">Nuestra Historia</h2>
                <div className="w-20 h-1 bg-pink-500 rounded-full mb-10"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-600 text-lg leading-relaxed">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-inner">🌱</span>
                      <h3 className="text-2xl font-bold text-blue-600">¿Cómo Empezamos?</h3>
                    </div>
                    <p className="mb-4">La Fundación Caminemos Juntos nació de un profundo deseo de transformar realidades. Observando la necesidad de atención médica oportuna y accesible en las comunidades de Barquisimeto y todo el Estado Lara, decidimos unir fuerzas y voluntades.</p>
                    <p>Comenzamos nuestra labor con pequeñas jornadas de atención comunitaria, llevando consultas básicas y una mano amiga a quienes más lo necesitaban.</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-pink-100 text-pink-600 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-inner">🤝</span>
                      <h3 className="text-2xl font-bold text-pink-600">¿Qué Hacemos?</h3>
                    </div>
                    <p className="mb-4">En la actualidad, ofrecemos un espacio seguro, cálido y profesional con múltiples especialidades médicas a costos solidarios.</p>
                    <p>Más allá de una consulta médica, impulsamos proyectos de educación preventiva, asistencia emocional y apoyo directo a la comunidad.</p>
                  </div>
                </div>

                <div className="mt-12 bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-2xl border border-blue-100 text-center shadow-sm">
                  <p className="text-xl md:text-2xl font-semibold text-gray-700 italic">"Cada paso que damos es una huella de amor. Tu bienestar es nuestro mayor compromiso."</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. ESPECIALIDADES MÉDICAS */}
      <main className="max-w-6xl mx-auto pt-14 pb-12 px-6 flex-grow">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-extrabold text-gray-800 tracking-tight">Nuestras Especialidades Médicas</h3>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
          {categorias.map((categoria, index) => (
            <motion.div key={categoria.id} className={`flex flex-col gap-6 relative ${index !== 2 ? 'md:border-r-2 md:border-gray-200 md:pr-10' : ''}`} variants={itemVariants}>
              <div className={`${categoria.headerBg} text-white text-center py-3 px-4 rounded-full font-bold text-sm shadow-md flex items-center justify-center min-h-[60px]`}>
                <span className="w-3/4 leading-tight">{categoria.titulo}</span>
              </div>

              <div className="flex flex-col gap-5 mt-2">
                {categoria.items.map((item) => (
                  <div key={item.id} onClick={() => setSeleccionada(item)} className="flex items-center gap-4 group cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-sm border-2 ${categoria.circleBg} ${categoria.circleBorder} transition-transform group-hover:scale-110`}>
                      {item.icon}
                    </div>
                    <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">{item.nombre}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* 5. HORARIOS DIARIOS */}
      <section className="max-w-4xl mx-auto w-full px-6 py-10 mb-10">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-extrabold text-gray-800 tracking-tight">Horarios de Consultas</h3>
          <div className="w-20 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4 text-base">Planifica tu visita seleccionando el día de tu preferencia.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {horarios.map((diaInfo) => (
            <button key={diaInfo.dia} onClick={() => setDiaSeleccionado(diaInfo.dia)} className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${diaSeleccionado === diaInfo.dia ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105' : 'bg-white text-gray-500 border border-gray-200 hover:bg-blue-50 hover:text-blue-600'}`}>
              {diaInfo.dia}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl p-8 border border-gray-100 min-h-[250px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={diaSeleccionado} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {horarios.find(h => h.dia === diaSeleccionado)?.consultas.map((consulta, i) => (
                <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl hover:bg-blue-50 transition-colors border border-gray-50">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-md flex-shrink-0">🩺</div>
                  <span className="font-semibold text-gray-700 leading-tight">{consulta}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 6. CARRUSEL */}
      <section className="max-w-6xl mx-auto w-full py-16 px-6 mb-20 flex-grow">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">El Corazón de Nuestra Fundación</h2>
          <p className="text-gray-500 text-lg mt-3">Transformando vidas, un paso a la vez.</p>
        </div>

        <div className="relative min-h-[700px] md:min-h-[550px] w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex items-center justify-center border border-gray-100">
          <AnimatePresence mode="wait">
            <motion.div key={historiaActual} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.6 }} className="absolute inset-0 flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gray-100 overflow-hidden relative">
                <img src={historias[historiaActual].imagen} alt={historias[historiaActual].titulo} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-16 flex flex-col justify-center bg-gradient-to-br from-blue-50/80 via-white to-sky-50/50 relative">
                <span className="text-6xl text-blue-200 font-serif leading-none absolute top-6 left-8 md:top-10 md:left-12 opacity-60">“</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-6 leading-snug relative z-10">{historias[historiaActual].titulo}</h3>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic relative z-10">{historias[historiaActual].mensaje}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
            {historias.map((_, idx) => (
              <button key={idx} onClick={() => setHistoriaActual(idx)} className={`transition-all duration-300 rounded-full ${historiaActual === idx ? 'w-10 h-3 bg-blue-600' : 'w-3 h-3 bg-gray-300 hover:bg-blue-400'}`} aria-label={`Ir a historia ${idx + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. MODAL DE DOCTORES */}
      <AnimatePresence>
        {seleccionada && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto" onClick={() => setSeleccionada(null)}>
            <motion.div initial={{ scale: 0.9, y: 30, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 30, opacity: 0 }} transition={{ type: "spring", bounce: 0.4, duration: 0.6 }} className="bg-white rounded-[2rem] shadow-2xl max-w-3xl w-full p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center md:items-start my-8" onClick={(e) => e.stopPropagation()}>
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-pink-400 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

              <button onClick={() => setSeleccionada(null)} className="absolute top-6 right-6 text-gray-400 hover:text-red-500 text-3xl font-bold transition-colors z-20 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center">&times;</button>

              <div className="w-full md:w-5/12 flex flex-col items-center gap-5 z-10">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-gray-100 rounded-[2rem] shadow-lg border-4 border-white overflow-hidden flex items-center justify-center text-gray-400">
                   {seleccionada.img ? <img src={seleccionada.img} alt={seleccionada.doctor} className="w-full h-full object-cover" /> : <span className="text-sm font-semibold text-gray-400">Sin foto</span>}
                </div>
                <div className="flex items-center gap-2 text-white bg-blue-500 px-5 py-2 rounded-full font-bold shadow-md">
                  <span className="text-xl drop-shadow-sm">{seleccionada.icon}</span>
                  <span className="tracking-wide uppercase text-sm">{seleccionada.nombre}</span>
                </div>
              </div>
              
              <div className="w-full md:w-7/12 flex flex-col gap-5 text-center md:text-left z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight leading-tight">{seleccionada.doctor}</h2>
                <div className="relative">
                  <span className="text-4xl text-blue-200 absolute -top-4 -left-4 font-serif">"</span>
                  <p className="text-gray-600 text-base md:text-lg italic leading-relaxed relative z-10">{seleccionada.descripcion}</p>
                </div>
                <div className="mt-2 p-5 bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 rounded-2xl flex justify-between items-center shadow-inner">
                  <span className="text-gray-500 font-semibold uppercase tracking-wider text-sm">Costo Solidario:</span>
                  <span className="text-3xl font-black text-teal-600">{seleccionada.costo}</span>
                </div>
                <button onClick={agendarCitaWhatsApp} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  Agendar Cita Ahora
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 8. FOOTER */}
      <footer className="bg-[#00a9ff] text-white pt-16 pb-10 px-6 w-full mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-base mb-2">Fundación Caminemos Juntos</h4>
              <a href="#" className="text-sm hover:underline hover:text-blue-100 transition-colors">Qué hacemos</a>
              <a href="#" className="text-sm hover:underline hover:text-blue-100 transition-colors">Publicaciones</a>
              <a href="#" className="text-sm hover:underline hover:text-blue-100 transition-colors">Novedades</a>
              <a href="#" className="text-sm hover:underline hover:text-blue-100 transition-colors">Actúa</a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-base mb-2">Centro de atención</h4>
              <a href="#" className="text-sm hover:underline hover:text-blue-100 transition-colors">Trabaja con nosotros</a>
              <a href="#" className="text-sm hover:underline hover:text-blue-100 transition-colors">Contáctanos</a>
            </div>

            <div className="flex flex-col md:items-end gap-6">
              <div className="flex gap-5">
                <a href="#" className="hover:text-blue-200 transition-colors"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                <a href="#" className="hover:text-blue-200 transition-colors"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="#" className="hover:text-blue-200 transition-colors"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
                <a href="#" className="hover:text-blue-200 transition-colors"><svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
              </div>
              
              <div className="flex flex-col md:items-end gap-2 mt-1">
                <a href="#" className="text-xs hover:underline hover:text-blue-100">Contáctanos</a>
                <a href="#" className="text-xs hover:underline hover:text-blue-100">Aviso legal</a>
                <a href="#" className="text-xs hover:underline hover:text-blue-100">Denunciar fraude, abuso, irregularidades</a>
                <a href="#" className="text-xs hover:underline hover:text-blue-100">Cookie settings</a>
              </div>
            </div>
          </div>

          <hr className="border-t border-blue-300 opacity-60 mb-8" />

          <div className="text-xs md:text-sm text-blue-50 leading-relaxed text-justify md:text-left flex flex-col md:flex-row justify-between gap-4">
            <p className="md:w-2/3">Fundación Caminemos Juntos trabaja incansablemente para defender los derechos y la salud integral de todas las familias.</p>
            <p className="font-bold text-white tracking-wide md:w-1/3 md:text-right">RIF: J-40230026-9</p>
          </div>
        </div>
      </footer>

    </div>
  );
}