get '/' do
  erb :index
end

get '/skills/:skill' do
  @skill = params[:skill]
  erb :skills
end

get '/meals' do

  # content_type :json

  @meals = ["Spaghetti",
    "Ravioli",
    "Humm[1us and Veggies",
    "Pizza",
    "Falafel",
    "Sushi",
    "Linguini",
    "Onigilli"].sample

# {:meal => "#{@meals}"}.to_json

    erb :meals
  end


