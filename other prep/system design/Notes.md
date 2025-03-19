# how to learn:
    watch the video or read the book/article
    then use AI to come up with lessons/questions to test you
        repeat if need to
    Don't just keep on moving on from one topic to next
        make sure that you have an understanding of it
            don't be perfect, just need to know at the high level so later you can refer to it
            When you are doing challenges, you will know what matters, what don't
                just in-time just needed learning
    
# scalling
    scalling servers
    scalling data layer
        what are the concerns and strategies to implement?

# data base features/capabilities:
    replication: what is it how's it done? pros/cons

# horizontal scaling of databases: sharding
    what is sharding?

# when designing a data system:
    try to think of the use case and how to turn it into simple key-value store as schema

# data base, data lake, data warehouse
    data lake: nothing just a bucket of all sorts of unstructured data
        a big file store

# data partitioning vs sharding
    what's the difference

# resiliency

# message queue:
single message queue
pub-sub
    many to many


# gRPC
google remote procedure call
    a communication framework build on top of http2
    sends data in Protocol Buffer instead of JSON
        cheaper/smaller in size
    two way communication due to http2
        also allows streaming
    because of smaller in data size being transmited, quicker to de/serlialized 
        and the two way communications
        it is way faster to couple two systems together
            that's why usually it is used in infrastructure/back end services/microservices
    could be used between communication between a server and a uncontrollable/preditable/realiable
        client, but econ system tooling isn't there yet.


# load balancing
    client side vs server side
    layer 4 vs layer 7

