import css from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={css.container}>
      {/* left side  */}
      <div className={css.dashboard}>
          <div className={css.dashboardHead}>
                <div className={css.head}>
                  <span>Dahboard</span>

                  <div className={css.durationButton}>
                      <select >
                        <option value="">1 week</option>
                        <option value="">1 month</option>
                        <option value="">1 year</option>
                      </select>
                  </div>
                  <div className={css.cards}>
                    cards
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
