import HeaderStyle from '../styles/Header.module.css'

export default function Header() {
  return (
    <div>
        <h1 className={HeaderStyle.title}>
            <span>King Mark</span> App
        </h1>
        <p className={HeaderStyle.description}>Keep up to date with the latest techs</p>
        {/* <h1 className="title">Style with jsx</h1>
        <style jsx>
            {`
                .title {
                    color:red
                }
            `}
        </style> */}
    </div>
  )
}
