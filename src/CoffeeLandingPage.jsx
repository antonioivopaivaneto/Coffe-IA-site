import { useState } from "react";
import { FaCoffee, FaGlobeAmericas, FaMugHot } from "react-icons/fa";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import coffe from "./assets/coffe.png";
import blend from "./assets/blend.png";
import etiope from "./assets/etiope.png";
import colombiano from "./assets/colombiano.png";
import cup from "./assets/cup.png";

const CoffeeLandingPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail && name) {
      console.log("Inscrição enviada:", { name, email });
      // Aqui você normalmente enviaria esses dados para o backend
    }
  };

  const products = [
    {
      name: "Blend Espresso",
      img: blend,
    },
    {
      name: "Colombiano Supremo",
      img: colombiano,
    },
    {
      name: "Etíope",
      img: etiope,
    },
  ];

  return (
    <div className="font-sans">
      {/* Seção de Cabeçalho */}
      <header className="relative h-screen flex items-center justify-center text-white">
        <img
          src={coffe}
          alt="Grãos de café"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="z-10 text-center">
          <h1 className="md:text-2xl sm:text-xs font-bold mb-4 flex justify-center">
            Café do{" "}
            <span className="bg-white text-stone-700 mx-2 rounded-lg">
              {" "}
              Tech Paiva
            </span>
          </h1>
          <h1 className="md:text-6xl text-5xl font-bold mb-4">
            Experimente a Pura Felicidade do Café
          </h1>
          <p className="text-xl mb-8">
            Desfrute dos sabores ricos de nossa seleção premium de cafés
          </p>
          <a
            href="#shop"
            onClick={(e) => {
              e.preventDefault(); // Previne o comportamento padrão do link
              window.scrollTo({ top: 950, behavior: "smooth" });
            }}
            className="bg-yellow-600 text-white font-bold py-3 px-8 rounded-full 
             hover:bg-yellow-700 active:bg-yellow-800 transition-all duration-300 ease-in-out 
             transform hover:scale-105"
          >
            Comprar Agora
          </a>
        </div>
      </header>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault(); // Previne o comportamento padrão do link
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div className="px-7 fixed bottom-0 right-0 w-28 cursor-pointer group mb-5">
          <img
            src={cup}
            alt="Copo de Café"
            className="transition-transform duration-300 ease-in-out w-16"
          />
          <p className="text-xs absolute bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            Topo
          </p>
        </div>
      </a>

       {/* Vitrine de Produtos */}
       <section id="shop" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nosso Café Premium
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:-m-5 transition-all"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">
                    Experimente o sabor rico e encorpado do nosso{" "}
                    {product.name.toLowerCase()} torrado com maestria.
                  </p>
                  <button className="bg-yellow-600 text-white font-bold py-2 px-4 rounded hover:bg-yellow-700 transition duration-300">
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Por que Escolher Nosso Café?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCoffee className="text-4xl mb-4 mx-auto" />,
                title: "Grãos Premium",
                description: "Colhidos nas melhores regiões de café do mundo",
              },
              {
                icon: <FaGlobeAmericas className="text-4xl mb-4 mx-auto" />,
                title: "Práticas Sustentáveis",
                description:
                  "Agricultura ecologicamente correta e comércio justo",
              },
              {
                icon: <FaMugHot className="text-4xl mb-4 mx-auto" />,
                title: "Torra Artesanal",
                description: "Torrado em pequenos lotes para um sabor ideal",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            O que Nossos Clientes Dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "João da Silva",
                text: "O melhor café que já provei. Rico, suave e cheio de sabor!",
              },
              {
                name: "Maria Oliveira",
                text: "Adoro a variedade de torras. Há algo para cada amante de café aqui.",
              },
              {
                name: "Carlos Santos",
                text: "Qualidade excepcional e entrega rápida. Sou cliente para sempre!",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section className="py-20 bg-yellow-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            Mantenha-se Atualizado
          </h2>
          <p className="text-center text-white mb-8">
            Assine nossa newsletter para ofertas exclusivas e dicas de café
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Seu Nome"
                className="w-full px-4 py-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Seu Email"
                className={`w-full px-4 py-2 rounded ${
                  !isValidEmail && "border-red-500"
                }`}
                value={email}
                onChange={handleEmailChange}
                required
              />
              {!isValidEmail && (
                <p className="text-red-200 text-sm mt-1">
                  Por favor, insira um endereço de e-mail válido
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-white text-yellow-600 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Pronto para Experimentar a Perfeição do Café?
          </h2>
          <a
            href="#shop"
            className="bg-yellow-600 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-700 transition duration-300 text-xl"
          >
            Comprar Agora
          </a>
        </div>
      </section>

      {/* Rodapé com Integração de Mídias Sociais */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="#"
              className="hover:text-yellow-600 transition duration-300"
            >
              <FiInstagram size={24} />
            </a>
            <a
              href="#"
              className="hover:text-yellow-600 transition duration-300"
            >
              <FiFacebook size={24} />
            </a>
            <a
              href="#"
              className="hover:text-yellow-600 transition duration-300"
            >
              <FiTwitter size={24} />
            </a>
          </div>
          <p className="text-center">
            &copy; 2023 Premium Coffee Co. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CoffeeLandingPage;
