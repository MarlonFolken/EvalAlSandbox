import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  //Me dan un numero
  //La funcion evalua y regresa un número
  function evalNum (userNum) {
    //Evalua si da 0 (no hay repeticion de numeros)
    let myString = (userNum).toString();
    let aSetString = new Set(myString);
    console.log("aSetString", aSetString);
    if(aSetString.size === myString.length){
      return 0;
    }else{
      //Tomo el numero y lo convierto en elementos individuales de un array:
      const arrayOfDigits = Array.from(String(userNum), Number);
      console.log("arrayOfDigits", arrayOfDigits)
      const individualArr = [];
      for (let index = 0; index < arrayOfDigits.length; index++) {
        if(arrayOfDigits[index] == arrayOfDigits[index+1]){
          individualArr.push(arrayOfDigits[index]);
        }
      }
      if(arrayOfDigits[arrayOfDigits.length - 1] == arrayOfDigits[0]){
        console.log("intoedge");
        individualArr.push(arrayOfDigits[0]);
      }
      console.log("Despues de sumar array...")
      console.log("arrayOfDigits", arrayOfDigits)
      console.log("individualArr", individualArr)
      //Teniendo todos los numeros que se repiten, se procede a sumarlos.
      let sumNum = individualArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      return sumNum;
      //console.log(arrayOfDigits);   //[1,2,3,4,5]
    }
  }


  return (
    <div className={styles.page}>
      





      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
