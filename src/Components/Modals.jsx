import React from 'react'

function Modals({modalOpen}) {
  return (
    <>
<div className="modal-overlay">
    <div className="modal-inner">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fugit adipisci facere repellat. Provident earum blanditiis nulla consequuntur iure fugiat ea error enim. Consequuntur eos ratione, facere dolores libero, laborum ipsam animi qui blanditiis, quasi quibusdam commodi suscipit quaerat adipisci accusantium! Saepe magnam quod inventore, corrupti nisi eum iure similique fuga maxime eveniet facere itaque quia eligendi blanditiis iste, culpa esse dolorem deleniti cumque? Veritatis consequuntur iure exercitationem quia modi reprehenderit vitae ratione enim facere aliquid, nemo ad soluta, corrupti repudiandae ducimus? Quisquam a earum voluptatibus tempore doloremque illo molestias velit sapiente, est eaque molestiae pariatur nulla vel ex porro ipsam incidunt odit nisi vero aliquam adipisci. Possimus earum voluptatum nam ex? Tempore est laudantium dignissimos voluptate suscipit nihil necessitatibus nam soluta, quae in consequatur harum quas vitae. Necessitatibus, voluptatum? Deserunt, odio. Quisquam, accusantium vero. Accusamus harum voluptatibus nemo quibusdam magni, laborum possimus ea odio earum distinctio delectus, vitae illum reprehenderit eos. Aperiam, illum. Laborum accusamus, error, voluptatibus quas fugit, non nisi eaque ullam hic dolores corporis tempore unde atque ad adipisci. Laboriosam, ipsa omnis illo minima vitae sit ipsum fugit! Soluta facilis, mollitia quia odio natus, voluptates quaerat dicta exercitationem error, tempora nemo fugiat expedita commodi beatae accusamus voluptatum?</p>
    <button className="closebtn btn btn-danger" onClick={modalOpen}>X</button>

    </div>
    </div>
    </>
  )
}

export default Modals
