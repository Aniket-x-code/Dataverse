import css from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={css.container}>
      {/* left side  */}
      <div className={css.dashboard}>
          <div className={css.dashboardHead}>
                <div className={css.head}>
                  <span>Dahboard</span>

                  <div className={css.duration}>

                  </div>
                  
                </div>
          </div>
      </div>

      <div className={css.orders}>
        orders
      </div>
    </div>
  )
}

export default Dashboard
