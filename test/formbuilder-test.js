var expect = chai.expect;


describe('Create a Text Input', function() {
    it('Create only one element', function() {

        $('#test1').bootstrapForm({ 

            formInputs: [

            {type: 'text', attr: {
                placeholder: 'benjamin', 
                validationState: 'success',
                helpblock: 'enter your first name',
                id: 'firstName',
                name: 'inputforName', 
                label: 'First Name' } 
            }
            ]
        });

        expect( $('#test1').length).to.equal(1);

    });

    it('If no ID is assigned, asign a random value', function() {

        $('#test2').bootstrapForm({ 

            formInputs: [

            {type: 'text', attr: {
                placeholder: 'benjamin', 
                validationState: 'success',
                helpblock: 'enter your first name',
                label: 'First Name' } 
            }

            ]

        });

    expect( $('#test2').find('input').attr('id')).to.not.equal(undefined)

    });

    it('If no name is assigned, asign a random value', function() {

        $('#test3').bootstrapForm({ 

            formInputs: [

            {type: 'text', attr: {
                placeholder: 'benjamin', 
                validationState: 'success',
                helpblock: 'enter your first name',
                label: 'First Name' } 
            }
            
            ]

        });

    expect( $('#test3').find('input').attr('name')).to.not.equal(undefined)

    });

});

describe('Create Radio Buttons', function() {

    it('Creates correct number of buttons', function() {

        var numberOfRadioObjects = Math.floor( Math.random() * 10),
            radioArray = [];

        for ( var i = 0, max = numberOfRadioObjects -1; i <= max ; i++) {

            radioArray.push( { id: 'id1', name: 'radios', label: 'wings' }  );

        }

      $('#test4').bootstrapForm({

            formInputs: [

            {type: 'radio', attr: {
                label: 'select your favorite food.',
                radios: radioArray
                }
            }

            ]

        });
       
        expect( $('#test4').find('input').length).to.equal(numberOfRadioObjects);

    });

    it('Creates the correct main label', function() {

      var testLabel = 'this is a testing label';

      $('#test5').bootstrapForm({
        formInputs: [

            {type: 'radio', attr: {
                label: testLabel,
                radios: [{ id: 'id1', name: 'radios', label: 'wings' }]
                }
            }

        ]

      });
      
      expect( $('#test5').find('label')[0].innerHTML).to.equal(testLabel);

    });

});

describe('Create Form Buttoms', function() {

  it('Defaults to Large size Buttons', function() {

    $('#test6').bootstrapForm({

       buttons: [ 
            {   validationState: 'success',
                id: 'submit',
                text: 'Submit Form',
                onSubmit: function(values) { console.log(values) }
            }
      ]

    });

    expect($('#test6').find('button').hasClass('btn-lg') ).to.equal(true)

  });

});