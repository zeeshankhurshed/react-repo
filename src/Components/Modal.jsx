import React from 'react'

function Modal({openModal}) {
  return (
    <div>
      <div className="modal-overlay">
  <div className="modal-inner">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero perspiciatis excepturi nemo provident! Eveniet dicta harum impedit doloremque magnam earum beatae, optio deserunt nemo atque pariatur minima non nostrum, officiis asperiores sint quis ad repellat provident excepturi veritatis quisquam? Unde hic porro a, labore quia cumque doloremque asperiores perspiciatis atque esse debitis cum accusantium commodi? Itaque optio ea doloremque! In cum tempore fugiat facilis sunt quo, mollitia ducimus. Reprehenderit consectetur voluptatem exercitationem, a tenetur consequatur cumque ab repellat ipsam, cupiditate natus enim soluta. Tempora natus impedit necessitatibus expedita consequatur molestiae? Id nam sapiente sunt voluptate ipsum facilis deleniti, non, temporibus, cumque quibusdam unde? Pariatur excepturi dolorem minus earum ipsam ut. Aliquid earum illo aspernatur repellat harum tenetur minus accusantium reiciendis asperiores ipsum fugit, esse laboriosam ab ad praesentium quas aperiam repellendus, unde sunt temporibus officiis quia corporis quam! Doloremque id beatae quo voluptates? Repudiandae sunt explicabo quos et quisquam atque ipsam quam odit dolores nostrum consequatur recusandae sapiente corrupti qui rerum accusamus, distinctio doloribus eum, maxime eaque! Repudiandae minus eaque adipisci quidem quod voluptatibus porro molestias cum at ullam earum tempore quia nisi ipsum aliquam quibusdam iusto deleniti ab eum possimus, perferendis corrupti, consequatur ipsa iste? Porro tempora reprehenderit modi.</p>

    <button className="closebtn btn btn-danger "onClick={openModal}>x</button>
  </div>
  </div>
    </div>
  )
}

export default Modal
